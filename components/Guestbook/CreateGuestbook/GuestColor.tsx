import styled from "@emotion/styled";
import React, { ChangeEvent, useContext } from "react";
import { SliderPicker } from "react-color";
import { palette } from "styles/palette";
import { GuestFormProvider } from ".";

interface Props {}

const GuestColor = (props: Props) => {
  const { guestForm, updateGuestForm } = useContext(GuestFormProvider);

  const handlePrimaryColorChange = (colorEvent) => {
    const { hex } = colorEvent;
    updateGuestForm("primaryColor", hex);
  };

  const handleSecondaryColorChange = (colorEvent) => {
    const { hex } = colorEvent;
    updateGuestForm("secondaryColor", hex);
  };

  return (
    <Container>
      <div className="color-setting">
        <p>컬러 1 설정</p>
        <SliderPicker color={guestForm["primaryColor"]} onChange={handlePrimaryColorChange} />
      </div>
      <div className="color-setting">
        <p>컬러 2 설정</p>
        <SliderPicker color={guestForm["secondaryColor"]} onChange={handleSecondaryColorChange} />
      </div>
    </Container>
  );
};

const Container = styled.section`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .color-setting {
    display: flex;
    flex-direction: column;

    & > p {
      margin-bottom: 1rem;
      font-size: 0.875rem;
      font-weight: 500;
      color: ${palette.grey[500]};
    }
  }
`;

export default GuestColor;
