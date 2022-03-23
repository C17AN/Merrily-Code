import styled from "@emotion/styled";
import React from "react";
import { palette } from "styles/palette";

export type CheckPointProps = {
  position: number;
  labelPosition: number;
};

const CheckPoint = ({ position, labelPosition }: CheckPointProps) => {
  const integerPosition = +position.toFixed();
  return (
    <Container labelPosition={labelPosition} position={integerPosition}>
      {integerPosition.toLocaleString()}Km
    </Container>
  );
};

const Container = styled.div<CheckPointProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 16px;
  font-size: 0.425rem;
  color: ${palette.grey[400]};
  border-radius: 3px;
  border: 1px solid ${palette.grey[500]};
  position: absolute;
  right: calc(100% - ${({ labelPosition }) => labelPosition / 100}%);
  top: 1rem;
`;

export default CheckPoint;
