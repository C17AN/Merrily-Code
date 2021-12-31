import React from "react";
import styled from "@emotion/styled";
import Title from "components/Portfolio/common/Title";
import InfoList from "../common/InfoList";
import CareerData from "data/About/CareerData";

const Activity = () => {
  return (
    <Container>
      <Title title="Other Activities" iconPath="" />
      <InfoList itemList={CareerData} />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 2rem;
`;

export default Activity;
