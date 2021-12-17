import styled from "@emotion/styled";
import React from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { palette } from "styles/palette";

type HeaderProps = {
  toggleSidebar: () => void;
};

const Header = ({ toggleSidebar }: HeaderProps) => {
  return (
    <Container>
      <IconContainer>
        <HiOutlineMenuAlt1 onClick={toggleSidebar} />
      </IconContainer>
      <p>👋🏻 안녕하세요, 찬민입니다!</p>
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const IconContainer = styled.div`
  border-radius: 25%;
  transition: 0.2s ease-in-out background-color;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  padding: 4px;

  &:hover {
    background-color: ${palette.notion.sidebar.hover};
  }

  & > svg {
    font-size: 20px;
    cursor: pointer;
  }
`;

export default Header;
