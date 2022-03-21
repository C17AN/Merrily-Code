import styled from "@emotion/styled";
import React from "react";
import Image from "next/image";
import { palette } from "styles/palette";
import { Restaurant } from "type/Restaurant";
import { motion } from "framer-motion";

type RestaurantListItemProps = {
  selectReviewId: (id: number) => void;
  reviewData: Restaurant;
};

const animateVariant = {
  zoom: {
    scale: 1.02,
    boxShadow: "2px 2px 8px 2px rgba(0, 0, 0, 0.2)",
  },
};

const RestaurantListItem = ({ reviewData, selectReviewId }: RestaurantListItemProps) => {
  const { id, title, thumbnail, location, description } = reviewData;

  return (
    <Container onClick={() => selectReviewId(id)} variants={animateVariant} whileHover="zoom">
      <div>
        <Thumbnail>
          <Image src={thumbnail} layout="fill" alt={title} objectFit="cover" />
        </Thumbnail>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Location>{location}</Location>
      </div>
    </Container>
  );
};

const Container = styled(motion.div)`
  border: 1px solid ${palette.grey[100]};
  border-radius: 0.5rem;
  padding: 1.5rem;
  cursor: pointer;
`;

const Thumbnail = styled.div`
  position: relative;
  display: block;
  height: 20rem;
  margin-bottom: 1rem;
  img {
    border-radius: 0.5rem;
  }

  @media (max-width: 768px) {
    height: 12rem;
  }
`;

const Title = styled.h2`
  font-size: 1.25rem;
  color: ${palette.black};
  margin-bottom: 0.5rem;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Description = styled.h3`
  font-size: 0.875rem;
  color: ${palette.grey[300]};
  margin-bottom: 0.75rem;
`;
const Location = styled.p`
  font-size: 0.875rem;
  margin: 0.5rem 0;
`;

export default RestaurantListItem;
