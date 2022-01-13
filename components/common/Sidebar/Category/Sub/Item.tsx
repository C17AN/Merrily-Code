import React from "react";
import styled from "@emotion/styled";
import { palette } from "styles/palette";
import Link from "next/link";

type SubCategoryItemProps = { icon: string; displayName: string; categoryName: string };

const SubCategoryItem = ({ icon, displayName, categoryName }: SubCategoryItemProps) => {
  const pathName = categoryName.toLowerCase();

  return (
    <Link href={`/category/${categoryName}`} passHref>
      <Container>
        <>{icon}</>
        <p>{displayName}</p>
      </Container>
    </Link>
  );
};

const Container = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5rem 2rem;
  cursor: pointer;
  transition: 0.2s ease-in-out background-color;

  &:hover {
    background-color: ${palette.notion.hover};
  }

  & > svg {
    font-size: 17px;
    margin-right: 0.625rem;
  }

  & > .category-icon {
    margin-right: 0.5rem;
  }
`;

export default SubCategoryItem;
