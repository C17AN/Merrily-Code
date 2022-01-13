import React from "react";
import styled from "@emotion/styled";
import Title from "components/Portfolio/common/Title";
import InfoList from "../common/InfoList";
import ChallengeData from "data/About/ChallengeData";

const Challenge = () => {
  return (
    <Container>
      <Title title={"Prize & Challenges"} iconPath={"/icons/prize.gif"} />
      <InfoList itemList={ChallengeData} />
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem;
`;

export default Challenge;
