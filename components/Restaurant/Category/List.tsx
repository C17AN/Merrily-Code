import styled from "@emotion/styled";
import React from "react";
import RestaurantCategoryItem from "./Item";

interface Props {}

const tagList = [
  "일식",
  "양식",
  "한식",
  "분위기좋은",
  "가성비",
  "중식",
  "피자",
  "치킨",
  "야식",
  "햄버거",
  "샐러드",
  "돼지고기",
  "소고기",
  "카페",
  "아이스크림",
  "아이스크림",
  "아이스크림",
  "아이스크림",
  "아이스크림",
  "아이스크림",
  "뷰가좋은",
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
  margin: 1rem 0 2rem 0;
  display: flex;
  gap: 0.875rem;
  overflow-x: scroll;
  max-width: 1200px;
`;

export default RestaurantCategoryList;
