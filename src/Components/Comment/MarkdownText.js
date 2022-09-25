import Markdown from 'marked-react';

export function MarkdownText({ body }) {
    return <Markdown>{body}</Markdown>
}