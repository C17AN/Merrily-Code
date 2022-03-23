import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import CountUp from "react-countup";

type TimeCounterProps = {
  totalCodingSecond: number;
  startingDate: string;
  endingDate: string;
};

const TimeCounter = ({ totalCodingSecond, startingDate, endingDate }: TimeCounterProps) => {
  return (
    <Container>
      <div className="codetime-count">
        <Image src="/icons/clock.gif" width={28} height={28} alt="코딩시간" layout="fixed" />
        <TimeCountText>
          <p>
            <CountUp end={totalCodingSecond / 3600} duration={2} />
            시간
          </p>
          <p>
            <CountUp end={(totalCodingSecond % 3600) / 60} duration={3} />분
          </p>
          <p>
            <CountUp end={(totalCodingSecond % 3600) % 60} duration={4} />초
          </p>
        </TimeCountText>
      </div>
      <p className="wakatime-text">Powered by Wakatime / {`${startingDate} ~ ${endingDate}`}</p>
    </Container>
  );
};

const Container = styled.div`
  & > .codetime-count {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    & > .wakatime-text {
      font-size: 0.375rem;
      text-align: start;
      line-height: 1.2;
    }
  }
`;

const TimeCountText = styled.div`
  margin: 0.75rem 0;
  flex: 1;
  text-align: right;
  font-size: 2rem;
  font-weight: 700;
  display: flex;

  & > p {
    margin-right: 0.625rem;
    &:last-of-type {
      margin-right: 0;
    }
  }

  @media (max-width: 768px) {
    & {
      font-size: 1.125rem;
    }
    & > p {
      margin-right: 0.5rem;
    }
  }
`;

export default TimeCounter;
