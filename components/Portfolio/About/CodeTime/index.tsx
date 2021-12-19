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
import TimeCounter from "./TimeCounter";

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
        {totalCodingSecond && startingDate && endingDate ? (
          <>
            <TimeMarathon current={totalCodingSecond / 3600} goal={10000} />
            <TimeCounter
              startingDate={startingDate}
              endingDate={endingDate}
              totalCodingSecond={totalCodingSecond}
            />
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
  gap: 2rem;
  box-shadow: 3px 3px 8px 5px ${palette.grey[50]};

  .wakatime-text {
    text-align: right;
    font-size: 0.75rem;
    color: ${palette.grey[500]};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

export default CodeTime;
