import styled from "@emotion/styled";
import React from "react";
import { palette } from "styles/palette";

const Blockquote = styled.blockquote`
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  border-left: 5px solid ${palette.grey[100]};
  color: ${palette.grey[100]};
  font-size: 0.875rem;
  line-height: 1.4;
`;

export default Blockquote;
