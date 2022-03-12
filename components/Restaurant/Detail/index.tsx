import styled from "@emotion/styled";
import Modal from "components/common/Modal";
import React from "react";
import { Restaurant } from "type/Restaurant";

type RestaurantReviewModalBodyProps = {
  reviewData: Restaurant;
};

const RestaurantReviewModalBody = ({ reviewData }: RestaurantReviewModalBodyProps) => {
  const { title } = reviewData;
  return <Container>{title}</Container>;
};

const Container = styled.div``;

export default RestaurantReviewModalBody;
