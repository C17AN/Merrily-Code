import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import TimeMarathon from "./TimeMarathon";
import Image from "next/image";
import endpoints from "constants/endpoints";
import CountUp from "react-countup";
import axios from "axios";
import { palette } from "styles/palette";
import SubTitle from "components/Portfolio/common/SubTitle";
import Divider from "components/Portfolio/common/Divider";

const CodeTime = () => {
  const [totalCodingSecond, setTotalCodingSecond] = useState<null | number>(null);
  const [startingDate, setStartingDate] = useState<null | string>(null);
  const [endingDate, setEndingDate] = useState<null | string>(null);

  const getWakaTimeData = async () => {
    const result = await axios.get(endpoints.WAKATIME);
    const wakaTimeData = result.data.data;
    const dateRange = wakaTimeData.range;
    setStartingDate(dateRange.start_date);
    setEndingDate(dateRange.end_date);
    setTotalCodingSecond(wakaTimeData.total_seconds);
  };

  useEffect(() => {
    getWakaTimeData();
  }, []);

  return (
    <>
      <SubTitle>👉🏻 Code Journey</SubTitle>
      <Divider />
      <Container>
        {totalCodingSecond ? (
          <>
            <TimeMarathon current={totalCodingSecond / 3600} goal={10000} />
            <div className="clock-container">
              <div className="codetime-count">
                <Image
                  src="/icons/clock.gif"
                  width={28}
                  height={28}
                  alt="코딩시간"
                  layout="fixed"
                />
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
              <p className="wakatime-text">
                Powered by Wakatime / {`${startingDate} ~ ${endingDate}`}
              </p>{" "}
            </div>
          </>
        ) : (
          <></>
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 8px;
  padding: 3rem;
  box-shadow: 3px 3px 8px 5px ${palette.grey[50]};

  .wakatime-text {
    text-align: right;
    font-size: 0.75rem;
    color: ${palette.grey[500]};
  }

  & > .clock-container {
    & > .codetime-count {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const TimeCountText = styled.p`
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
      font-size: 1.6rem;
    }
  }
`;

export default CodeTime;
