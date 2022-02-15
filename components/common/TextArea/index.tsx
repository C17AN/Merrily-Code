import styled from "@emotion/styled";
import { palette } from "styles/palette";

const TextArea = styled.textarea`
  resize: none;
  padding: 0.5rem;
  caret-color: ${palette.grey[400]};
  outline: none;
  transition: 0.2s ease-in-out all;
  border: 1px solid ${palette.grey[200]};
  border-radius: 4px;
  font-family: inherit;
  width: 100%;

  &:focus {
    border-color: ${palette.blue[500]};
  }

  &::placeholder {
    color: ${palette.grey[200]};
  }
`;

export default TextArea;
