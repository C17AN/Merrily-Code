import styled from "@emotion/styled";
import React from "react";
import Tag from "./Tag";

type TagListProps = {
  tagList: string[];
};

const TagList = ({ tagList }: TagListProps) => {
  return (
    <Container>
      {tagList.map((tag) => (
        <Tag key={tag} tagName={tag} />
      ))}
    </Container>
  );
};

const Container = styled.ul`
  display: flex;
  gap: 0.5rem;
`;

export default TagList;
