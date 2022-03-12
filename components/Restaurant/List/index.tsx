import React, { useState } from "react";
import Divider from "components/Portfolio/common/Divider";
import RestaurantListItem from "./Item";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Restaurant } from "type/Restaurant";
import Modal from "components/common/Modal";
import RestaurantReviewModalBody from "../Detail";

type RestaurantListProps = {
  restaurantReviewList: Restaurant[];
};

const RestaurantList = ({ restaurantReviewList }: RestaurantListProps) => {
  const [selectedReview, setSelectedReview] = useState<Restaurant | null>(null);

  const selectReviewId = (_id: number) => {
    const selectedReview = restaurantReviewList.find(({ id }) => id === _id) ?? null;
    setSelectedReview(selectedReview);
  };

  return (
    <div>
      <ListTitle>
        <Title>전체 목록</Title>
        <Divider />
      </ListTitle>
      <ContentList layout>
        {restaurantReviewList.map((review) => {
          const { title } = review;
          return (
            <RestaurantListItem key={title} reviewData={review} selectReviewId={selectReviewId} />
          );
        })}
      </ContentList>
      {selectedReview && (
        <Modal
          title={selectedReview.title}
          closeModal={() => setSelectedReview(null)}
          answerType="single"
          width={900}
          body={<RestaurantReviewModalBody reviewData={selectedReview} />}
          onCancel={() => setSelectedReview(null)}
        />
      )}
    </div>
  );
};

const Title = styled.h2`
  font-size: 1.4rem;
`;

const ListTitle = styled.div``;

const ContentList = styled(motion.ul)`
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: repeat(auto-fit, minmax(30%, 1fr));
  grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
  grid-gap: 1.5rem;
`;

export default RestaurantList;
