import React from "react";
import Divider from "components/Portfolio/common/Divider";
import RestaurantListItem from "./Item";
import styled from "@emotion/styled";

interface Props {}

const RestaurantList = (props: Props) => {
  return (
    <div>
      <Title>전체 목록</Title>
      <Divider />
      <RestaurantListItem />
    </div>
  );
};

const Title = styled.h2`
  font-size: 1.4rem;
`;

export default RestaurantList;
