import React from "react";
import category from "data/category";
import MainCategoryList from "./Main/List";
import { MainCategory } from "type/Category";

const CategoryList = () => {
  const mainCategoryList = Object.keys(category) as MainCategory[];
  return <MainCategoryList mainCategoryList={mainCategoryList} />;
};

export default CategoryList;
