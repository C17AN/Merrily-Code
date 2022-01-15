import styled from "@emotion/styled";
import React, { MouseEvent, useContext } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { palette } from "styles/palette";
import { GuestFormProvider } from ".";

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
  const { guestForm, updateGuestForm } = useContext(GuestFormProvider);

  const handleGuestNameChange = (name: string, value: string) => {
    updateGuestForm(name, value);
  };

  return (
    <Container>
      <p>관심 태그</p>
      <ScrollContainer>
        <PositionList>
          {PositionListData.map((position) => {
            const { label, value } = position;
            const isSelected = value === guestForm["guestTag"];
            return (
              <PositionItem
                isSelected={isSelected}
                key={value}
                onClick={() => handleGuestNameChange("guestTag", value)}
              >
                {label}
              </PositionItem>
            );
          })}
        </PositionList>
      </ScrollContainer>
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
  max-width: 200%;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }

  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const PositionItem = styled.li<{ isSelected: boolean }>`
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid ${palette.grey[200]};
  white-space: nowrap;
  cursor: pointer;
  transition: 0.2s ease-in-out all;
  color: ${({ isSelected }) => (isSelected ? palette.grey[500] : palette.grey[300])};
  background-color: ${({ isSelected }) => (isSelected ? palette.grey[50] : palette.white)};
`;

export default GuestPosition;
