import styled from "@emotion/styled";
import React from "react";
import MainCategoryItem from "./Item";

type MainCategoryList = {
  mainCategoryList: Array<string>;
};

const MainCategoryList = ({ mainCategoryList }: MainCategoryList) => {
  return (
    <Container>
      {mainCategoryList.map((category) => {
        return <MainCategoryItem key={category} name={category} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 0.5rem;
`;

export default MainCategoryList;
