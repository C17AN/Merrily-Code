import React, { useState } from "react";
import category from "data/category";
import SubCategoryList from "../Sub/List";
import styled from "@emotion/styled";
import { AiFillCaretRight } from "react-icons/ai";
import { palette } from "styles/palette";
import { useRouter } from "next/router";
import Category, { MainCategory } from "type/Category";

type MainCategoryItemProps = {
  mainCategoryName: MainCategory;
  selectedMainCategory: MainCategory | null;
  selectMainCategory: (category: MainCategory) => void;
};

const allPost = "전체 포스트";

const MainCategoryItem = ({
  mainCategoryName,
  selectedMainCategory,
  selectMainCategory,
}: MainCategoryItemProps) => {
  const route = useRouter();
  const isSelected = mainCategoryName === selectedMainCategory;
  const subCategoryList: Category | Category[] = category[mainCategoryName];
  const isExpandable = Array.isArray(subCategoryList);

  const toggleExpanded = () => {
    if (!isExpandable) {
      const { categoryName } = subCategoryList;
      route.push(`/category/${categoryName}`);
      selectMainCategory(allPost);
      return;
    }
    selectMainCategory(mainCategoryName);
  };

  return isExpandable ? (
    <>
      <Container onClick={toggleExpanded} isSelected={isSelected}>
        <>
          <AiFillCaretRight />
          <p>{mainCategoryName}</p>
        </>
      </Container>
      <SubCategoryList subCategoryList={subCategoryList} isExpanded={isSelected} />
    </>
  ) : (
    <Container onClick={toggleExpanded} isSelected={isSelected}>
      <p>{mainCategoryName}</p>
    </Container>
  );
};

const Container = styled.div<{ isSelected: boolean }>`
  padding: 0.625rem 1rem;
  font-size: 13px;
  display: flex;
  gap: 0.5rem;
  cursor: pointer;
  transition: 0.2s ease-in-out background-color;
  background-color: ${({ isSelected }) => (isSelected ? palette.notion.hover : "")};

  &:hover {
    background-color: ${palette.notion.hover};
  }
`;

export default MainCategoryItem;
