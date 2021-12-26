import React from "react";
import styled from "@emotion/styled";
import SubTitle from "components/Portfolio/common/SubTitle";
import Image from "next/image";
import Divider from "components/Portfolio/common/Divider";
import InfoList from "../common/InfoList";
import CareerData from "data/About/CareerData";
import Title from "components/Portfolio/common/Title";

const Career = () => {
  return (
    <Container>
      <Title iconPath={"/icons/rocket.gif"} title={"경력 정보"}></Title>
      <Divider />
      <InfoList itemList={CareerData} />
    </Container>
  );
};

const Container = styled.div`
  @media (max-width: 768px) {
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & > h2 {
    margin-bottom: 0;
    margin-left: 0.25rem;
  }
`;

export default Career;
