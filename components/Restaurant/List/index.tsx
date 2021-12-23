import React from "react";
import Divider from "components/Portfolio/common/Divider";
import RestaurantListItem from "./Item";
import styled from "@emotion/styled";

interface Props {}

const RestaurantList = (props: Props) => {
  return (
    <div>
      <ListTitle>
        <Title>전체 목록</Title>
        <Divider />
      </ListTitle>
      <RestaurantListItem />
      <RestaurantListItem />
      <RestaurantListItem />
    </div>
  );
};

const Title = styled.h2`
  font-size: 1.4rem;
`;

const ListTitle = styled.div``;

export default RestaurantList;
