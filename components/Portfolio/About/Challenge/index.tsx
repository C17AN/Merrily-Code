import React from "react";
import styled from "@emotion/styled";
import SubTitle from "components/Portfolio/common/SubTitle";
import Divider from "components/Portfolio/common/Divider";
import Title from "components/Portfolio/common/Title";

const Challenge = () => {
  return (
    <Container>
      <Title title={"Prize & Challenge"} iconPath={"/icons/prize.gif"} />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 2rem;
`;

export default Challenge;
