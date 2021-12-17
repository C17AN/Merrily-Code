import React from "react";
import category from "data/category";
import MainCategoryList from "./Main/List";

interface Props {}

const CategoryList = (props: Props) => {
  const mainCategoryList = Object.keys(category);
  return <MainCategoryList mainCategoryList={mainCategoryList} />;
};

export default CategoryList;
