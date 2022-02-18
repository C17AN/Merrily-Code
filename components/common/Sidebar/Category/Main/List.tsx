import styled from "@emotion/styled";
import React, { useState } from "react";
import Category, { MainCategory } from "type/Category";
import MainCategoryItem from "./Item";

type MainCategoryList = {
  mainCategoryList: MainCategory[];
};

const MainCategoryList = ({ mainCategoryList }: MainCategoryList) => {
  const [selectedMainCategory, setSelectedMainCategory] = useState<MainCategory | null>(null);

  const selectMainCategory = (category: MainCategory) => {
    setSelectedMainCategory(category);
  };

  return (
    <Container>
      {mainCategoryList.map((categoryName) => {
        return (
          <MainCategoryItem
            key={categoryName}
            mainCategoryName={categoryName}
            selectMainCategory={selectMainCategory}
            selectedMainCategory={selectedMainCategory}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 0.5rem;
`;

export default MainCategoryList;
