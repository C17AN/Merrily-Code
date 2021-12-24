import React from "react";
import styled from "@emotion/styled";
import SubTitle from "components/Portfolio/common/SubTitle";
import Divider from "components/Portfolio/common/Divider";

const Activity = () => {
  return (
    <Container>
      <SubTitle>🏆 기타 활동 정보</SubTitle>
      <Divider />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 2rem;
`;

export default Activity;
