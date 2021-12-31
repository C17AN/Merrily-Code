import React from "react";
import styled from "@emotion/styled";
import Title from "components/Portfolio/common/Title";
import InfoList from "../common/InfoList";
import CareerData from "data/About/CareerData";

const Challenge = () => {
  return (
    <Container>
      <Title title={"Prize & Challenges"} iconPath={"/icons/prize.gif"} />
      <InfoList itemList={CareerData} />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 2rem;
`;

export default Challenge;
