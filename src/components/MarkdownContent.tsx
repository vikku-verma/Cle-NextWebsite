'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Components } from 'react-markdown';

interface MarkdownContentProps {
    content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
    // Preprocess content to normalize line breaks
    const processedContent = content
        .replace(/\r\n/g, '\n')  // Normalize Windows line breaks
        .replace(/\r/g, '\n')    // Normalize old Mac line breaks
        .trim();

    const components: Components = {
        // Customize heading styles
        h2: ({ children }) => (
            <h2 className="text-2xl font-extrabold text-[#0f172a] mb-4 mt-8 first:mt-0">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-xl font-bold text-[#0f172a] mb-3 mt-6">
                {children}
            </h3>
        ),
        h4: ({ children }) => (
            <h4 className="text-lg font-semibold text-[#0f172a] mb-2 mt-4">
                {children}
            </h4>
        ),
        // Customize paragraph
        p: ({ children }) => (
            <p className="text-slate-700 leading-relaxed mb-4">
                {children}
            </p>
        ),
        // Customize lists
        ul: ({ children }) => (
            <ul className="list-disc pl-6 mb-4 space-y-2">
                {children}
            </ul>
        ),
        ol: ({ children }) => (
            <ol className="list-decimal pl-6 mb-4 space-y-2">
                {children}
            </ol>
        ),
        li: ({ children }) => (
            <li className="text-slate-700">
                {children}
            </li>
        ),
        // Customize strong/bold
        strong: ({ children }) => (
            <strong className="font-semibold text-slate-900">
                {children}
            </strong>
        ),
        // Customize links
        a: ({ children, href }) => (
            <a
                href={href}
                className="text-[#f59e0b] hover:text-[#d97706] underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        ),
        // Customize code blocks
        code: ({ children, className }) => {
            const isInline = !className;
            return isInline ? (
                <code className="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded text-sm font-mono">
                    {children}
                </code>
            ) : (
                <code className="block bg-slate-100 text-slate-800 p-4 rounded-lg text-sm font-mono overflow-x-auto my-4">
                    {children}
                </code>
            );
        },
        // Customize blockquotes
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-[#f59e0b] pl-4 italic text-slate-600 my-4">
                {children}
            </blockquote>
        ),
    };

    return (
        <div className="markdown-content">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={components}
            >
                {processedContent}
            </ReactMarkdown>
        </div>
    );
}
