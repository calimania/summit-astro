import { marked } from 'marked';

type MarkdownProps = {
  markdown_string: string;
  className?: string;
};

const Markdown = ({markdown_string, className}:MarkdownProps) => {
  const html = marked(markdown_string);
  return <div dangerouslySetInnerHTML={{ __html: html }} className={className} />;
};

export default Markdown;
