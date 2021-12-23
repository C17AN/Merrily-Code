import styled from "@emotion/styled";
import React from "react";

interface Props {}

const Heading2 = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

const Container = styled.h2`
  font-size: 1.2rem;
`;

export default Heading2;
