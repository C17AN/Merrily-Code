import styled from "@emotion/styled";
import React from "react";
import { palette } from "styles/palette";

interface Props {}

const RestaurantListItem = (props: Props) => {
  return <Container>dd</Container>;
};

const Container = styled.div`
  display: flex;
  border: 1px solid ${palette.grey[100]};
  border-radius: 0.5rem;
  padding: 1.5rem;
`;

export default RestaurantListItem;
