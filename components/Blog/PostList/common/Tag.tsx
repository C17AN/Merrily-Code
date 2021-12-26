import styled from "@emotion/styled";
import React from "react";

type PostTag = {
  tagName: string;
};

const PostTag = ({ tagName }: PostTag) => {
  return <Container>{tagName}</Container>;
};

const Container = styled.div`
  border-radius: 8px;
  font-size: 0.675rem;
`;

export default PostTag;
