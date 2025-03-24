import { marked } from 'marked';
import '../styles/blocks.scss';

type MarkdownProps = {
  markdown_string: string;
  className?: string;
};

const Markdown = ({ markdown_string, className }: MarkdownProps) => {
  const html = marked(markdown_string || '');
  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      className={`blocks-content prose prose-lg ${className || ''}`}
    />
  );
};


export default Markdown;
