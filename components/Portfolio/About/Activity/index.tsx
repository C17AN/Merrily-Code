import React from "react";
import styled from "@emotion/styled";
import Title from "components/Portfolio/common/Title";
import InfoList from "../common/InfoList";
import ActivityData from "data/About/ActivityData";

const Activity = () => {
  return (
    <Container>
      <Title title="Other Activities" iconPath="" />
      <InfoList itemList={ActivityData} />
    </Container>
  );
};

const Container = styled.div``;

export default Activity;
