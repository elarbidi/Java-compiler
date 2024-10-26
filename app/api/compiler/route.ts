// app/api/compiler/route.ts
import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import { randomUUID } from 'crypto';
import path from 'path';
import fs from 'fs/promises';

const execAsync = promisify(exec);
const MEMORY_LIMIT = '5000m';
const TIMEOUT = 10000; // 5 seconds

async function runJavaCode(code: string, fileName: string) {
    // Generate a unique directory for this request
    const uniqueDir = path.join(process.cwd(), `tmp-${randomUUID()}`);
    const filePath = path.join(uniqueDir, fileName);
    const className = fileName.split('.')[0];

    // Create the unique directory
    await fs.mkdir(uniqueDir);
    console.log(`Created directory: ${uniqueDir}`);

    try {
        // Save the code to the Java file in the unique directory
        await fs.writeFile(filePath, code);
        console.log(`Written code to file: ${filePath}`);

        // Docker command to run the Java code
        const dockerCommand = `
            docker run --rm --memory=${MEMORY_LIMIT} \
            -v ${uniqueDir}:/app \
            -w /app openjdk:11 \
            sh -c "javac ${fileName} && java ${className}"
        `;
            // Execute the Docker command
        const { stdout, stderr } = await execAsync(dockerCommand, { timeout: TIMEOUT });

        console.log('Execution output:', stdout);
        return { stdout, stderr };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error : any) {
        console.error('Error during Docker execution:', error);
        await fs.rm(uniqueDir, { recursive: true, force: true });
        throw new Error(`Execution failed: ${error?.stderr || error.message}`);
    } finally {
        // Clean up the unique directory and its contents
        try {
            await fs.rm(uniqueDir, { recursive: true, force: true });
            console.log(`Removed directory: ${uniqueDir}`);
        } catch (cleanupError) {
            console.error('Error cleaning up temporary files:', cleanupError);
        }
    }
}

export async function POST(request: Request) {
    try {
        const { code, fileName } = await request.json();
        console.log(`Received fileName: ${fileName}`);

        // Basic validation: Check for disallowed imports
        if (/import\s+java\.io|import\s+java\.nio/.test(code)) {
            return NextResponse.json({ error: 'Disallowed imports detected.' }, { status: 400 });
        }

        const { stdout, stderr } = await runJavaCode(code, fileName);
        return NextResponse.json({ output: stdout || stderr }, { status: 200 });
    } catch (error: unknown) {
        console.error('Error executing Java code:', error);
        // If error has a message, use it; otherwise use a generic message
        const errorMessage = (error instanceof Error && error.message) ? error.message : 'An unexpected error occurred.';
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
