import styled from "@emotion/styled";
import React from "react";
import { palette } from "styles/palette";

interface Props {}

const GuestAnimation = (props: Props) => {
  return <Container></Container>;
};

const Container = styled.section`
  padding: 1rem 0;

  & > p {
    margin-bottom: 0.625rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: ${palette.grey[500]};
  }
`;

export default GuestAnimation;
