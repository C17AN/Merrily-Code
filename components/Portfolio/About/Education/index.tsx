import React from "react";
import styled from "@emotion/styled";
import SubTitle from "components/Portfolio/common/SubTitle";
import Image from "next/image";
import Divider from "components/Portfolio/common/Divider";
import EducationList from "./List";

const Education = () => {
  return (
    <Container>
      <TitleContainer>
        <Image src="/icons/book.gif" width={24} height={24} layout="intrinsic" alt="교육 정보" />
        <SubTitle>교육 정보</SubTitle>
      </TitleContainer>
      <Divider />
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
