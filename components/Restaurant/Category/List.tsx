import styled from "@emotion/styled";
import React from "react";
import RestaurantCategoryItem from "./Item";

interface Props {}

const tagList = [
  "일식",
  "양식",
  "한식",
  "중식",
  "돼지고기",
  "소고기",
  "스시",
  "분위기좋은",
  "가성비",
  "피자",
  "초밥",
  "치킨",
  "야식",
  "햄버거",
  "샐러드",
  "파스타",
  "족발",
  "국수",
];

const RestaurantCategoryList = (props: Props) => {
  return (
    <Container>
      {tagList.map((tag) => {
        return <RestaurantCategoryItem key={tag} categoryName={tag} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin: 1rem 0 2rem 0;
  flex-wrap: wrap;
  gap: 0.875rem;

  &::-webkit-scrollbar {
    display: none;
  }

  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export default RestaurantCategoryList;
