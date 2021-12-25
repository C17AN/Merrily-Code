import styled from "@emotion/styled";
import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { palette } from "styles/palette";

enum Button {
  RED,
  YELLOW,
  GREEN,
  BLUE,
  SKYBLUE,
}

const ButtonType = {
  red: "RED",
  yellow: "YELLOW",
  green: "GREEN",
  blue: "BLUE",
  skyblue: "SKYBLUE",
};

const ControlButtons = () => {
  return (
    <Container>
      <ButtonContainer>
        <ControlButton color={ButtonType.red} />
        <ControlButton color={ButtonType.yellow} />
        <ControlButton color={ButtonType.green} />
      </ButtonContainer>
      {/* FIXME: 불필요하다고 생각될 시 제거 */}
      {/* <IoIosArrowRoundBack size={22} /> */}
    </Container>
  );
};

const setButtonColor = (color: string) => {
  switch (color) {
    case "RED":
      return `${palette.red[200]}`;
    case "YELLOW":
      return `${palette.yellow.primary}`;
    case "GREEN":
      return `${palette.green.primary}`;
    case "BLUE":
      return `${palette.blue.primary}`;
    case "SKYBLUE":
      return `${palette.skyBlue.primary}`;
    default:
      return;
  }
};

const Container = styled.div`
  display: flex;
  padding: 1rem 1rem 0.5rem 1rem;
  justify-content: space-between;
  align-items: center;
`;

const ButtonContainer = styled.div`
  gap: 0.5rem;
  display: flex;
`;

const ControlButton = styled.p<{ color: any }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ color }) => setButtonColor(color)};
`;

export default ControlButtons;
