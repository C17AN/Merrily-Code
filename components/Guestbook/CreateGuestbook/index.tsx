import styled from "@emotion/styled";
import Button from "components/common/Button";
import RoundImageWrapper from "components/common/RoundImageWrapper";
import Image from "next/image";
import React, { useState } from "react";
import { palette } from "styles/palette";
import GuestImage from "./GuestImage";
import GuestName from "./GuestName";
import GuestPosition from "./GuestPosition";

interface Props {}

const CreateGuestbook = (props: Props) => {
  return (
    <Container>
      <GuestImage />
      <GuestName />
      <GuestPosition />
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
`;

export default CreateGuestbook;
