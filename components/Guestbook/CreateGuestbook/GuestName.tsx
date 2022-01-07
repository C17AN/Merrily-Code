import styled from "@emotion/styled";
import React from "react";

interface Props {}

const GuestName = (props: Props) => {
  return (
    <Container>
      <p>방명록 이름</p>
    </Container>
  );
};

const Container = styled.section``;

export default GuestName;
