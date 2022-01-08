import styled from "@emotion/styled";
import React from "react";
import { palette } from "styles/palette";

interface Props {}

const PositionListData = [
  { label: "프론트엔드", value: "frontend" },
  { label: "백엔드", value: "backend" },
  { label: "클라우드", value: "cloud" },
  { label: "모바일", value: "mobile" },
  { label: "인공지능", value: "ai" },
  { label: "데이터", value: "data" },
  { label: "디자인", value: "design" },
];

const GuestPosition = (props: Props) => {
  return (
    <Container>
      <p>관심 분야</p>
      <PositionList>
        {PositionListData.map((position) => {
          const { label, value } = position;
          return <PositionItem key={value}>{label}</PositionItem>;
        })}
      </PositionList>
    </Container>
  );
};

const Container = styled.section`
  padding: 1rem 0;

  & > p {
    margin-bottom: 0.625rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: ${palette.grey[500]};
  }
`;

const PositionList = styled.ul`
  padding: 0.25rem 0.5rem;
  display: flex;
  gap: 0.5rem;
  overflow-x: scroll;
  max-width: 200%;
  scroll-behavior: smooth;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;

  &::-webkit-scrollbar {
    display: none;
  }

  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const PositionItem = styled.li`
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid ${palette.grey[200]};
  color: ${palette.grey[400]};
  background-color: ${palette.white};
  white-space: nowrap;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;

  cursor: pointer;
`;

export default GuestPosition;
