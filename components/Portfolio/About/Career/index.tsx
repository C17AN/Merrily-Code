import React from "react";
import styled from "@emotion/styled";
import InfoList from "../common/InfoList";
import CareerData from "data/About/CareerData";
import Title from "components/Portfolio/common/Title";

const Career = () => {
  return (
    <Container>
      <Title iconPath={"/icons/rocket.gif"} title={"Career"} />
      <InfoList itemList={CareerData} />
    </Container>
  );
};

const Container = styled.div`
  @media (max-width: 768px) {
  }
`;

export default Career;
