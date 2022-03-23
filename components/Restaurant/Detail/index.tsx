import styled from "@emotion/styled";
import Modal from "components/common/Modal";
import Divider from "components/common/Divider";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { Restaurant } from "type/Restaurant";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { palette } from "styles/palette";

type RestaurantReviewModalBodyProps = {
  reviewData: Restaurant;
};

const RestaurantReviewModalBody = ({ reviewData }: RestaurantReviewModalBodyProps) => {
  const { title, description, location, imageList, price, review, visitedAt } = reviewData;
  return (
    <Container>
      <h1>{title}</h1>
      <h3 className="restaurant-description">
        {description} - {visitedAt} 방문 후기
      </h3>
      <Divider />
      <MetaData>
        <Slider afterChange={(index) => {}} adaptiveHeight={true} dots={true} arrows={false}>
          {Array.isArray(imageList) ? (
            imageList.map((image, index) => (
              <ImageWrapper key={index}>
                <Image src={image} layout="fill" objectFit="cover" alt={`${title}-${index}`} />
              </ImageWrapper>
            ))
          ) : (
            <ImageWrapper>
              <Image src={imageList} layout="fill" objectFit="cover" alt={title} />
            </ImageWrapper>
          )}
        </Slider>
        <Rating>
          <h2>별점</h2>
          <ul className="rating-items-list">
            <li>총점</li>
            <li>맛(신선도)</li>
            <li>위생</li>
            <li>가격</li>
            <li>분위기(뷰)</li>
            <li>서비스</li>
          </ul>
        </Rating>
      </MetaData>
      <RestaurantInfo>
        <h2 className="subtitle">🔎 가게 정보</h2>
        <Divider />
        <div className="info-list">
          <p>
            위치 : <span className="restaurant-info">{location}</span>
          </p>
          <p>
            1인 기준 가격 : <span className="restaurant-info">{price}</span>
          </p>
        </div>
      </RestaurantInfo>
      <h2 className="subtitle">📝 한줄평</h2>
      <Divider />
      <Review>{review}</Review>
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem;
  & > h1 {
    font-size: 1.375rem;
    margin-bottom: 0.5rem;
  }
  .slick-slider {
    display: inline-block;
    position: relative;
    width: 24rem;
    margin-bottom: 2rem;
  }

  .restaurant-description {
    font-weight: normal;
    font-size: 0.875rem;
    color: ${palette.grey[500]};
  }

  .subtitle {
    font-size: 1.25rem;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    padding: 0;

    .slick-slider {
      display: inline-block;
      position: relative;
      width: calc(300px - 3rem);
      margin-bottom: 2rem;
    }
  }
`;

const MetaData = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Rating = styled.section`
  h2 {
    margin-bottom: 1rem;
  }
  .rating-items-list {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
  }
`;

const RestaurantInfo = styled.div`
  margin-bottom: 2rem;
  font-size: 0.875rem;

  .restaurant-info {
    color: ${palette.grey[500]};
  }

  .info-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 24rem;
  height: 15rem;

  @media (max-width: 768px) {
    width: calc(300px - 3rem);
  }
`;

const Review = styled.article`
  white-space: pre-wrap;
  line-height: 1.4;
  font-size: 0.875rem;
  color: ${palette.black};
`;

export default RestaurantReviewModalBody;
