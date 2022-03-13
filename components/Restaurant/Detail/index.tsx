import styled from "@emotion/styled";
import Modal from "components/common/Modal";
import Divider from "components/Portfolio/common/Divider";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { Restaurant } from "type/Restaurant";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type RestaurantReviewModalBodyProps = {
  reviewData: Restaurant;
};

const RestaurantReviewModalBody = ({ reviewData }: RestaurantReviewModalBodyProps) => {
  const { title, location, imageList } = reviewData;
  return (
    <Container>
      <h1>{title}</h1>
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
        <div>
          <h2>별점</h2>
          <p>별점!!!</p>
        </div>
      </MetaData>
      <h2 className="subtitle">🔎 가게 정보</h2>
      <Divider />
      <p>{location}</p>
      <h2 className="subtitle">📝 한줄평</h2>
      <Divider />
      <p>맛있다.</p>
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem;
  & > h1 {
    font-size: 1.375rem;
  }
  .slick-slider {
    display: inline-block;
    position: relative;
    width: 24rem;
    margin-bottom: 2rem;
  }

  .subtitle {
    font-size: 1.25rem;
    font-weight: bold;
  }
`;

const MetaData = styled.div`
  display: flex;
  gap: 1rem;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 24rem;
  height: 15rem;
`;

export default RestaurantReviewModalBody;
