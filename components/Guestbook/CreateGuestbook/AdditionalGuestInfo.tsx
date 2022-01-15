import Button from "components/common/Button";
import React from "react";
import ButtonVariant from "type/variants/Button";
import { palette } from "styles/palette";
import { BsArrowReturnRight } from "react-icons/bs";
import GuestTag from "./GuestTag";
import styled from "@emotion/styled";
import GuestColor from "./GuestColor";

type AdditionalInfoProps = {
  handleMenuChange: () => void;
};

const swipeButtonVariant: ButtonVariant = {
  backgroundColor: palette.white,
  hoverBackgroundColor: palette.grey[50],
  color: palette.grey[200],
  hoverColor: palette.grey[500],
};

const AdditionalGuestInfo = ({ handleMenuChange }: AdditionalInfoProps) => {
  return (
    <Container>
      <GuestColor />
      <GuestTag />
      <ButtonContainer>
        <Button {...swipeButtonVariant} icon={<BsArrowReturnRight />} onClick={handleMenuChange}>
          기본정보 수정하기
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

export default AdditionalGuestInfo;
