import React from "react";
import styled from "@emotion/styled";
import { palette } from "styles/palette";

interface Props {}

const RestaurantSearch = (props: Props) => {
  return (
    <Container>
      <SearchBar placeholder="지역 또는 찾고자 하는 메뉴를 찾아보세요." />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const SearchBar = styled.input`
  flex: 1;
  padding: 0.75rem;
  font-size: 0.875rem;
  outline: none;
  border: 1px solid ${palette.grey[100]};
  border-radius: 0.25rem;
`;

export default RestaurantSearch;
