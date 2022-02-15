import React from "react";
import styled from "@emotion/styled";
import { palette } from "styles/palette";
import { JobPositionLabel } from "../CreateGuestbook/GuestTag";

type ProfileLabelProps = {
  text: JobPositionLabel;
  backgroundColor: string;
  color: string;
};

const PositionLabel = ({ text, backgroundColor, color }: ProfileLabelProps) => {
  return <Container>{text}</Container>;
};

const Container = styled.li`
  display: inline-block;
  border-radius: 0.5rem;
  background-color: ${palette.skyBlue[50]};
  color: white;
  padding: 0.375rem 0.625rem;
  font-size: 0.75rem;
  white-space: nowrap;

  @media (max-width: 768px) {
    & {
      padding: 0.25rem 0.5rem;
      font-size: 0.625rem;
    }
  }
`;

export default PositionLabel;
