import React from "react";
import styled from "@emotion/styled";
import SubTitle from "components/Portfolio/common/SubTitle";
import SchoolInfoCard from "./SchoolInfoCard";
import Image from "next/image";

const Education = () => {
  return (
    <Container>
      <TitleContainer>
        <Image
          src="/icons/education.gif"
          width={24}
          height={24}
          layout="intrinsic"
          alt="교육 정보"
        />
        <SubTitle>교육 정보</SubTitle>
      </TitleContainer>
      <SchoolInfoCard />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 2rem;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;

  & > h2 {
    margin-bottom: 0;
  }
`;

export default Education;
