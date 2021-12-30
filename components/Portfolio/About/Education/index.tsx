import React from "react";
import styled from "@emotion/styled";
import SubTitle from "components/Portfolio/common/SubTitle";
import Image from "next/image";
import Divider from "components/Portfolio/common/Divider";
import EducationList from "./List";
import Title from "components/Portfolio/common/Title";

const Education = () => {
  return (
    <Container>
      <Title title="Education & Certification" iconPath="/icons/book.gif" />
      <EducationList />
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
