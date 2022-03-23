import React from "react";
import styled from "@emotion/styled";
import Title from "components/Home/Portfolio/common/Title";
import InfoList from "../common/InfoList";

const Project = () => {
  return (
    <Container>
      <Title title="Projects" iconPath="/icons/book.gif" />
      {/* <InfoList itemList={EducationData} /> */}
    </Container>
  );
};

const Container = styled.div`
  @media (max-width: 768px) {
  }
`;
export default Project;
