import styled from "@emotion/styled";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";

type CodeType = { children: string; className: string };

const Code = ({ children, className }: CodeType) => {
  const language = className?.split("-")[1] || "plain";
  const parsedChildren = children.slice(0, children.length - 1);
  console.log(parsedChildren);

  return (
    <Container>
      <SyntaxHighlighter style={nord} language={language}>
        {parsedChildren}
      </SyntaxHighlighter>
    </Container>
  );
};

const Container = styled.div`
  font-size: 0.8rem;
  border-radius: 4px;
  margin: 1rem 0;
  & > pre {
    border-radius: 6px;
    code {
      font-weight: 400;
      font-size: 0.875rem !important;
    }
  }

  * {
    font-family: menlo, Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace !important;
  }
`;

export default Code;
