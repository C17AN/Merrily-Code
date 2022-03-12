import styled from "@emotion/styled";
import React from "react";
import Image from "next/image";
import { palette } from "styles/palette";
import { Restaurant } from "type/Restaurant";

const RestaurantListItem = ({ title, thumbnail }: Restaurant) => {
  return (
    <Container>
      <div>
        {/* <Image src={thumbnail} width={300} height={300} alt={title} /> */}
        <Title>{title}</Title>
        <Description>깐부치킨 그는 과연 신인가</Description>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  border: 1px solid ${palette.grey[100]};
  border-radius: 0.5rem;
  padding: 1.5rem;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  color: ${palette.black};
  margin-bottom: 0.5rem;
`;

const Description = styled.h3`
  font-size: 0.875rem;
  color: ${palette.grey[300]};
`;

export default RestaurantListItem;
