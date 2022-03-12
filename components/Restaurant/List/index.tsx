import React from "react";
import Divider from "components/Portfolio/common/Divider";
import RestaurantListItem from "./Item";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Restaurant } from "type/Restaurant";

type RestaurantListProps = {
  restaurantReviewList: Restaurant[];
};

const RestaurantList = ({ restaurantReviewList }: RestaurantListProps) => {
  return (
    <div>
      <ListTitle>
        <Title>전체 목록</Title>
        <Divider />
      </ListTitle>
      <ContentList layout>
        {restaurantReviewList.map((review) => {
          const { id, title, thumbnail, location, imageList } = review;
          return (
            <RestaurantListItem
              key={title}
              title={title}
              thumbnail={thumbnail}
              id={id}
              location={location}
              imageList={imageList}
            />
          );
        })}
      </ContentList>
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
  -ms-grid-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 1rem;
`;

export default RestaurantList;
