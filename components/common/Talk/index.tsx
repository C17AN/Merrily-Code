import styled from "@emotion/styled";
import React from "react";
import { palette } from "styles/palette";

interface Props {}

const Talk = (props: Props) => {
  return <Container></Container>;
};

const Container = styled.div`
  display: flex;
  position: fixed;
  background-color: ${palette.skyBlue[50]};
  bottom: 1rem;
  right: 1rem;
  width: 50px;
  height: 50px;
  border: 1px solid #cdcdcd;
  border-radius: 20px;
  cursor: pointer;
`;

export default Talk;
