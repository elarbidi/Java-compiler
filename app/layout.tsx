import type { Metadata } from "next";
import Link from 'next/link';
import "./globals.css";

export const metadata: Metadata = {
  title: "Online Java Compiler - Create and Execute Java Code in Your Browser",
  description: "A powerful online Java compiler that allows users to write, compile, and execute Java code instantly without installation. Perfect for students, engineers, and beginners.",
  keywords: "Java compiler, online Java coding, Java programming, compile Java code, execute Java code, Java development tool, coding for students, coding for engineers, beginner programming",
  openGraph: {
    title: "Online Java Compiler",
    description: "Access a simple and efficient online Java compiler to write, compile, and run Java code.",
    url: "https://yourwebsite.com", // Replace with your actual URL
    siteName: "Java Compiler",
    type: "website",
    images: [
      {
        url: "https://yourwebsite.com/images/compiler.png", // Replace with an actual image URL
        width: 800,
        height: 600,
        alt: "Online Java Compiler Screenshot"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Java Compiler",
    description: "Access a simple and efficient online Java compiler to write, compile, and run Java code.",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://yourwebsite.com", // Replace with your actual website URL
  "name": "Online Java Compiler",
  "description": "A powerful online Java compiler to write, compile, and execute Java code instantly without installation.",
  "publisher": {
    "@type": "Organization",
    "name": "Java Compiler",
    "logo": {
      "@type": "ImageObject",
      "url": "https://yourwebsite.com/images/compiler.png", // Replace with an actual image URL
      "width": 800,
      "height": 600
    }
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://yourwebsite.com/search?query={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="min-h-screen bg-gray-50 flex flex-col"> {/* Softer background */}
          <nav className="bg-gray-800 p-4 shadow-md"> {/* Darker gray for nav */}
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-white text-2xl font-bold">Java Compiler</h1>
              <ul className="flex space-x-4">
                <li><a className="text-gray-300 hover:underline" href="#home">Home</a></li>
                <li><a className="text-gray-300 hover:underline" href="#about">About</a></li>
                <li><a className="text-gray-300 hover:underline" href="#contact">Contact</a></li>
              </ul>
            </div>
          </nav>
          <div className="p-8 flex flex-col items-center flex-grow bg-gray-50"> {/* Content background */}
            {children}

            <div className="mt-8 mx-10 px-10 p-4 rounded bg-white shadow-lg">
              <h2 className="text-4xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">
                Why Use Our Online Java Compiler?
              </h2>
              <p className="text-gray-700 mb-4">
                Our online Java compiler is designed to provide an intuitive and efficient coding experience for developers of all levels. Whether you&apos;re a student learning the fundamentals of Java programming or a seasoned engineer working on complex projects, our tool simplifies the coding process.
              </p>

              <p className="text-gray-700 mb-4">
                One of the primary benefits of using our online compiler is accessibility. You can write, compile, and execute your Java code directly from your browser without the need for any installations. This makes it an ideal solution for those who need to code on the go or prefer not to set up a local development environment.
              </p>

              <p className="text-gray-700 mb-4">
                Our Java compiler supports various features that enhance your programming workflow. With syntax highlighting, error detection, and real-time output display, you can easily debug and refine your code. This tool is perfect for educational purposes, allowing students to practice coding exercises and complete assignments efficiently.
              </p>

              <p className="text-gray-700 mb-6">
                For developers working collaboratively, our platform provides a straightforward way to share code snippets with peers. Just copy the link to your compiled code, and you&apos;re ready to collaborate, receive feedback, or present your work to others. This feature is especially useful for coding boot camps and group projects.
              </p>

              <h3 className="text-3xl font-semibold text-gray-800 mt-6 mb-4">Features of Our Online Java Compiler</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 1l3 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" />
                  </svg>
                  <span>User-Friendly Interface: Simple and clean design for seamless navigation.</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 1l3 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" />
                  </svg>
                  <span>Instant Compilation: Get immediate feedback on your code without delays.</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 1l3 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" />
                  </svg>
                  <span>Error Highlighting: Quickly identify and fix coding errors.</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 1l3 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" />
                  </svg>
                  <span>Cross-Platform Compatibility: Use it on any device with an internet connection.</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 1l3 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" />
                  </svg>
                  <span>Resource Management: Efficiently manage your coding resources without installation hassles.</span>
                </li>
              </ul>

              <p className="text-gray-700 mb-4">
                In conclusion, whether you are a beginner learning Java basics or an experienced developer looking for a convenient coding solution, our online Java compiler is an invaluable resource. Start coding today and experience the simplicity and power of our tool!
              </p>
            </div>
          </div>
          <footer className="bg-gray-800 text-white py-4 mt-auto"> {/* Darker gray for footer */}
            <div className="container mx-auto text-center">
              <p>&copy; 2024 Java Compiler. All rights reserved.</p>
              <p>
                <Link className="text-gray-300 hover:underline" href="Online-Java-Compiler-for-Students"> Online Java Compiler for Students</Link> |
                <Link className="text-gray-300 hover:underline" href="Online-Java-Compiler-for-Engineers"> Online Java Compiler for Engineers</Link> |
                <Link className="text-gray-300 hover:underline" href="Online-Java-Compiler-for-Beginners"> Online Java Compiler for Beginners</Link> |
                <Link className="text-gray-300 hover:underline" href="Online-Easy-to-Use-Java-Compiler"> Online Easy to Use Java Compiler</Link> |
                <Link className="text-gray-300 hover:underline" href="Online-Java-Compiler-for-Girls"> Online Java Compiler for Girls</Link> |
                <Link className="text-gray-300 hover:underline" href="Online-Java-compiler-for-Children"> Online Java Compiler for Children</Link> |
                <Link className="text-gray-300 hover:underline" href="Online-Simple-Java-Compiler"> Online Simple Java Compiler</Link> |
                <Link className="text-gray-300 hover:underline" href="Online-No-Installation-Java-Compiler"> Online No Installation Java Compiler</Link>
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
