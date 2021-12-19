import React from "react";
import styled from "@emotion/styled";
import RestaurantSearch from "./Search";
import RestaurantCategoryList from "./Category/List";
import RestaurantList from "./List";

const Restaurant = () => {
  return (
    <Container>
      <Title>🍖 막간을 틈탄 맛집 소개!</Title>
      <RestaurantSearch />
      <RestaurantCategoryList />
      <RestaurantList />
    </Container>
  );
};

const Container = styled.div``;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    & {
      font-size: 1.4rem;
      margin-bottom: 1rem;
    }
  }
`;

export default Restaurant;
