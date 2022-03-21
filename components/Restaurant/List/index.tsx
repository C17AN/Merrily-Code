import React, { useState } from "react";
import Divider from "components/Portfolio/common/Divider";
import RestaurantListItem from "./Item";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Restaurant } from "type/Restaurant";
import Modal from "components/common/Modal";
import RestaurantReviewModalBody from "../Detail";
import ButtonVariant from "type/variants/Button";
import { palette } from "styles/palette";

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
          closeModal={() => setSelectedReview(null)}
          answerType="multi"
          width={900}
          height={600}
          rightText="닫기"
          leftText="공유하기"
          onLeftButtonClick={() => {}}
          leftButtonVariant={ModalCancelButtonVariant}
          rightButtonVariant={ModalConfirmButtonVariant}
          body={<RestaurantReviewModalBody reviewData={selectedReview} />}
          onRightButtonClick={() => setSelectedReview(null)}
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

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const ModalCancelButtonVariant: ButtonVariant = {
  color: palette.white,
  backgroundColor: palette.red[100],
  hoverBackgroundColor: palette.red[300],
};

const ModalConfirmButtonVariant: ButtonVariant = {
  color: palette.white,
  backgroundColor: palette.green[400],
  hoverBackgroundColor: palette.green[300],
};

export default RestaurantList;
