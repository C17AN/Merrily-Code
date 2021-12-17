import styled from "@emotion/styled";
import React from "react";
import Divider from "../common/Divider";
import SubTitle from "../common/SubTitle";

interface Props {}

const About = (props: Props) => {
  return (
    <Container>
      <SubTitle>👉🏻 내 정보</SubTitle>
      <Divider />
    </Container>
  );
};

const Container = styled.div`
  padding: 0 5rem 5rem 5rem;
`;

export default About;
