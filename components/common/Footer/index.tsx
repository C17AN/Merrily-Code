import React from "react";
import styled from "@emotion/styled";
import { palette } from "styles/palette";

const Footer = () => (
  <Container>
    <p>@NoteFolio / Created By @C17AN, 2021</p>
  </Container>
);

const Container = styled.footer`
  margin-top: auto;
  padding: 2rem;
  display: flex;
  justify-content: center;
  font-size: 0.75rem;
  color: ${palette.grey[300]};
`;

export default Footer;
