import React from "react";
import styled from "@emotion/styled";
import { palette } from "styles/palette";

interface Props {}

const Footer = (props: Props) => {
  return (
    <Container>
      <p>Motivated By Notion / Created By @C17AN, 2021</p>
    </Container>
  );
};

const Container = styled.footer`
  margin-top: auto;
  padding: 2rem;
  display: flex;
  justify-content: center;
  font-size: 0.875rem;
  color: ${palette.grey[300]};
`;

export default Footer;
