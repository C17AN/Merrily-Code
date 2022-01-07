import styled from "@emotion/styled";
import React from "react";
import { palette } from "styles/palette";

interface Props {}

const PositionList = [
  { label: "프론트엔드", value: "frontend" },
  { label: "백엔드", value: "backend" },
  { label: "디자이너", value: "designer" },
  { label: "기획자", value: "planner" },
];

const GuestPosition = (props: Props) => {
  return (
    <Container>
      {PositionList.map((position) => {
        const { label, value } = position;
        return <PositionItem key={value}>{label}</PositionItem>;
      })}
    </Container>
  );
};

const Container = styled.ul`
  display: flex;
  gap: 0.5rem;
`;

const PositionItem = styled.li`
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  background-color: ${palette.skyBlue.primary};
  color: white;
  cursor: pointer;
`;

export default GuestPosition;
