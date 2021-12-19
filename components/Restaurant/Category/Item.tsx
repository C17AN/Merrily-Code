import styled from "@emotion/styled";
import React from "react";
import { palette } from "styles/palette";

type RestaurantCategoryItemProps = {
  categoryName: string;
};

const RestaurantCategoryItem = ({ categoryName }: RestaurantCategoryItemProps) => {
  return <Container>{categoryName}</Container>;
};

const Container = styled.div`
  display: inline-block;
  padding: 0.375rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  color: ${palette.grey[500]};
  border: 1px solid ${palette.grey[100]};
  white-space: nowrap;
  cursor: pointer;
`;

export default RestaurantCategoryItem;
