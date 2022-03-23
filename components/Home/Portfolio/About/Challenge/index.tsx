import React from "react";
import styled from "@emotion/styled";
import Title from "components/Home/Portfolio/common/Title";
import InfoList from "../common/InfoList";
import ChallengeData from "data/about/ChallengeData";

const Challenge = () => {
  return (
    <Container>
      <Title title={"Prize & Challenges"} iconPath={"/icons/prize.gif"} />
      <InfoList itemList={ChallengeData} />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 2rem;
`;

export default Challenge;
