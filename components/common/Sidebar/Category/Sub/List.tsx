import styled from "@emotion/styled";
import React from "react";
import SubCategoryItem from "./Item";

type SubCategoryListProps = {
  // FIXME: Remove any type
  subCategoryList: Array<any>;
  isExpanded: boolean;
};

const SubCategoryList = ({ subCategoryList, isExpanded }: SubCategoryListProps) => {
  return (
    <Container isExpanded={isExpanded}>
      {subCategoryList.map((categoryData) => {
        const { displayName, icon, categoryName } = categoryData;
        return (
          <SubCategoryItem
            key={categoryName}
            icon={icon}
            displayName={displayName}
            categoryName={categoryName}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.div<{ isExpanded: boolean }>`
  transition: 0.25s ease-in-out all;
  max-height: ${({ isExpanded }) => (isExpanded ? "200px" : "0")};
  overflow: hidden;
`;

export default SubCategoryList;
