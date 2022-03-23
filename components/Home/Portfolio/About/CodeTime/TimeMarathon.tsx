import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import CheckPoint, { CheckPointProps } from "./CheckPoint";
import { palette } from "styles/palette";

type TimeMarathonProps = {
  current: number;
  goal: number;
};

const TimeMarathon = ({ current, goal }: TimeMarathonProps) => {
  return (
    <Container>
      <Road />
      <Flag>
        <Image src="/icons/flag.gif" width={24} height={24} alt="목표" />
      </Flag>
      <Car position={current}>
        <Image src="/icons/plane.gif" width={28} height={28} alt="현재" />
      </Car>
      <div>
        <CheckPoint position={current} labelPosition={2200} />
        <CheckPoint position={goal} labelPosition={10000} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: baseline;
  position: relative;
  @media (max-width: 768px) {
    & {
      margin-top: 1.5rem;
    }
  }
`;

const Road = styled.div`
  width: 300px;
  height: 2px;
  border-bottom: 2px solid ${palette.grey.primary};

  @media (max-width: 768px) {
    & {
      width: 240px;
    }
  }
`;

const Flag = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const Car = styled.div<{ position: number }>`
  position: absolute;
  left: 0;
  bottom: 0;
  left: calc(${({ position }) => position / 100}%);
`;

export default TimeMarathon;
