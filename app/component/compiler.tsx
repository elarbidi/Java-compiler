'use client';

import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { java } from '@codemirror/lang-java';

export default function Compiler() {
    const [code, setCode] = useState<string>(`/******************************************************************************

                            Online Java Compiler.
                Code, Compile, Run and Debug java program online.
Write your code in this editor and press "Run" button to execute it.

*******************************************************************************/

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}`);

    const [output, setOutput] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [fileName, setFileName] = useState<string>('Main.java');
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setOutput('');
        setError('');
        setLoading(true);

        try {
            const res = await fetch('http://localhost:3000/api/compiler', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fileName, code }),
            });

            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.error);
            }
            setOutput(data.output);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unknown error occurred");
            }
        } finally {
            setLoading(false);
        }
    };

    const handleFileNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFileName(e.target.value);
    };

    const toggleEditing = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-100 text-black">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    {isEditing ? (
                        <input
                            type="text"
                            value={fileName}
                            onChange={handleFileNameChange}
                            onBlur={toggleEditing}
                            className="bg-white text-sm text-black px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                        />
                    ) : (
                        <div
                            onClick={toggleEditing}
                            className="bg-white text-black px-3 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200"
                        >
                            <span className="text-sm">{fileName}</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Main Content */}
            <form onSubmit={handleSubmit} className="flex-grow flex flex-col items-center justify-center pt-8 space-y-8">
                <div className="w-11/12 md:w-[70vw]">
                    <div className="bg-white border border-gray-400 rounded-lg shadow-lg overflow-hidden">
                        <CodeMirror
                            value={code}
                            extensions={[java()]}
                            onChange={(value) => setCode(value)}
                            className="focus:outline-none"
                            theme="dark"
                            height='60vh'
                            width='80vw'
                            basicSetup={{
                                lineNumbers: true,
                            }}
                            placeholder="Write your Java code here..."
                        />
                    </div>
                </div>

                {/* Run Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className={`flex items-center justify-center space-x-2 px-8 py-3 rounded-md transition-all duration-300 shadow-lg 
                        ${loading ? 'bg-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-blue-500 to-red-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-red-400'}`}
                >
                    <span>{loading ? 'Compiling...' : 'Run'}</span>
                </button>

                {/* Output Section */}
                <div className="w-11/12 max-w-5xl md:w-[70vw] bg-gray-200 p-6 rounded-lg shadow-md border border-gray-400">
                    <p className='text-base font-semibold mb-3'>Output:</p>
                    {output ? (
                        <pre className="bg-gray-900 p-4 rounded-md text-sm text-green-400 overflow-auto max-h-40">{output}</pre>
                    ) : error ? (
                        <div>
                            <p className='text-base font-semibold text-red-500'>Error:</p>
                            <pre className="bg-red-100 p-4 rounded-md text-sm text-red-400">{error}</pre>
                        </div>
                    ) : (
                        <p className="text-sm text-gray-500">Click on RUN button to see the output</p>
                    )}
                </div>
            </form>
        </div>
    );
}
