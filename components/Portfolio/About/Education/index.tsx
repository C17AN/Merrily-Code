import React from "react";
import styled from "@emotion/styled";
import SubTitle from "components/Portfolio/common/SubTitle";
import SchoolInfoCard from "./SchoolInfoCard";

const Education = () => {
  return (
    <Container>
      <SubTitle>🎓 교육 정보</SubTitle>
      <SchoolInfoCard />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 2rem;
`;

export default Education;
