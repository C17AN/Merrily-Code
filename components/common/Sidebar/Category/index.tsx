import styled from "@emotion/styled";
import React from "react";
import CategoryList from "./List";

type CategoryProps = {};

const Category = ({}: CategoryProps) => {
  return (
    <Container>
      <p className="category-header">카테고리</p>
      <CategoryList />
    </Container>
  );
};

const Container = styled.div`
  font-size: 0.75rem;
  .category-header {
    padding: 2rem 1rem 0 1rem;
  }
`;

export default Category;
