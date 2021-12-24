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
  & > pre {
    border-radius: 6px;
  }
`;

export default Code;