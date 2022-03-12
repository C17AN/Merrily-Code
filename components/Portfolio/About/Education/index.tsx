import React from "react";
import styled from "@emotion/styled";
import Title from "components/Portfolio/common/Title";
import InfoList from "../common/InfoList";
import EducationData from "data/about/EducationData";

const Education = () => {
  return (
    <Container>
      <Title title="Education & Certification" iconPath="/icons/book.gif" />
      <InfoList itemList={EducationData} />
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

export default Education;
