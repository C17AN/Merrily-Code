import styled from "@emotion/styled";
import Input from "components/common/Input/input";
import React from "react";
import { palette } from "styles/palette";

interface Props {}

const GuestName = (props: Props) => {
  return (
    <Container>
      <p>이름 (닉네임)</p>
      <Input />
    </Container>
  );
};

const Container = styled.section`
  margin-bottom: 0.5rem;

  & > p {
    margin-bottom: 0.625rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: ${palette.grey[500]};
  }
`;

export default GuestName;
