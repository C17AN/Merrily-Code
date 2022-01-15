import styled from "@emotion/styled";
import Button from "components/common/Button";
import React from "react";
import ButtonVariant from "type/variants/Button";
import GuestMessage from "./GuestMessage";
import GuestImage from "./GuestImage";
import GuestName from "./GuestName";
import { BsPersonPlus } from "react-icons/bs";
import { palette } from "styles/palette";

const swipeButtonVariant: ButtonVariant = {
  backgroundColor: palette.white,
  hoverBackgroundColor: palette.grey[50],
  color: palette.grey[200],
  hoverColor: palette.grey[500],
};

type BasicGuestInfoProps = {
  handleMenuChange: () => void;
};

const BasicGuestInfo = ({ handleMenuChange }: BasicGuestInfoProps) => {
  return (
    <Container>
      <GuestImage />
      <GuestName />
      <GuestMessage />
      <ButtonContainer>
        <Button {...swipeButtonVariant} icon={<BsPersonPlus />} onClick={handleMenuChange}>
          추가 정보 입력하기
        </Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: auto;
`;

export default BasicGuestInfo;
