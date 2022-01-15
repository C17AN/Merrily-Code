import styled from "@emotion/styled";
import React, { ChangeEvent, useContext } from "react";
import { SliderPicker } from "react-color";
import { palette } from "styles/palette";
import { GuestFormProvider } from ".";

interface Props {}

const GuestColor = (props: Props) => {
  const { guestForm, updateGuestForm } = useContext(GuestFormProvider);

  const handleGuestColorChange = (colorEvent) => {
    const { hex } = colorEvent;
    updateGuestForm("guestColor", hex);
  };

  return (
    <Container>
      <p>퍼스널 컬러</p>
      <SliderPicker color={guestForm["guestColor"]} onChange={handleGuestColorChange} />
    </Container>
  );
};

const Container = styled.section`
  padding: 1rem 0;

  & > p {
    margin-bottom: 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: ${palette.grey[500]};
  }
`;

export default GuestColor;
