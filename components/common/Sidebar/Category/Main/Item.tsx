import React, { useState } from "react";
import category from "data/category";
import SubCategoryList from "../Sub/List";
import styled from "@emotion/styled";
import { AiFillCaretRight } from "react-icons/ai";
import { palette } from "styles/palette";

type MainCategoryItemProps = {
  name: string;
};

const MainCategoryItem = ({ name }: MainCategoryItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const subCategoryList = category[name];

  const toggleExpanded = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };

  return (
    <>
      <Container onClick={toggleExpanded}>
        <>
          <AiFillCaretRight />
          <p>{name}</p>
        </>
      </Container>
      {subCategoryList && (
        <SubCategoryList subCategoryList={subCategoryList} isExpanded={isExpanded} />
      )}
    </>
  );
};

const Container = styled.div`
  padding: 0.625rem 1rem;
  font-size: 13px;
  display: flex;
  gap: 0.5rem;
  cursor: pointer;
  transition: 0.2s ease-in-out background-color;

  &:hover {
    background-color: ${palette.notion.hover};
  }
`;

export default MainCategoryItem;
