import styled from "@emotion/styled";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";

const Code = ({ children }) => {
  return (
    <Container>
      <SyntaxHighlighter language="javascript" style={tomorrow}>
        {children}
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
