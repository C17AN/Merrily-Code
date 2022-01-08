import styled from "@emotion/styled";
import React from "react";
import { palette } from "styles/palette";

interface Props {}

const RestaurantListItem = (props: Props) => {
  return (
    <Container>
      <div>
        <Title>치킨의 자존심, 깐부치킨</Title>
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
