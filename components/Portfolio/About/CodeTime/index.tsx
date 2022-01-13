import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import TimeMarathon from "./TimeMarathon";
import endpoints from "constants/endpoints";
import axios from "axios";
import { palette } from "styles/palette";
import SubTitle from "components/Portfolio/common/SubTitle";
import Divider from "components/Portfolio/common/Divider";
import TimeCounter from "./TimeCounter";
import { AiFillClockCircle } from "react-icons/ai";
import { FaGithubAlt } from "react-icons/fa";

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
    <Container>
      <TitleContainer>
        <SubTitle>👉🏻 Code Journey</SubTitle>
        <div className="button-container">
          <AiFillClockCircle size={28} color={palette.black} />
          <FaGithubAlt size={28} color={palette.grey[200]} />
        </div>
      </TitleContainer>
      <Divider />
      <Content>
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
      </Content>
    </Container>
  );
};

const Container = styled.section``;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    margin: 0;
  }

  .button-container {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0 1rem;
    cursor: pointer;

    & > svg {
      border-radius: 25%;
      padding: 0.25rem;
      transition: 0.2s ease-in-out background-color;

      &:hover {
        background-color: ${palette.notion.hover};
      }
    }
  }
`;

const Content = styled.div`
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
    padding: 1.5rem;
    gap: 3rem;

    .wakatime-text {
      font-size: 0.625rem;
    }
  }
`;

export default CodeTime;
