import styled from "@emotion/styled";
import React from "react";
import Link from "next/link";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoMdRestaurant } from "react-icons/io";
import { palette } from "styles/palette";

type HeaderProps = {
  toggleSidebar: () => void;
};

const Header = ({ toggleSidebar }: HeaderProps) => {
  return (
    <Container>
      <div className="header-title">
        <IconContainer>
          <HiOutlineMenuAlt1 onClick={toggleSidebar} />
        </IconContainer>
        <p>👋🏻 안녕하세요, 찬민입니다!</p>
      </div>
      <Link href="/restaurants" passHref>
        <div className="restaurant-icon">
          <IoMdRestaurant size={20} color={palette.grey[600]} />
        </div>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: white;

  .header-title {
    display: flex;
    align-items: center;
  }

  .restaurant-icon {
    cursor: pointer;
    border-radius: 25%;
    padding: 0.25rem;
    transition: 0.2s ease-in-out background-color;

    &:hover {
      background-color: ${palette.notion.sidebar.hover};
    }
  }
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
