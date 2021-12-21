import React from "react";
import styled from "@emotion/styled";
import PostItem from "./Item";

interface Props {
  postList: any;
}

const PostList = ({ postList }: Props) => {
  return (
    <Container>
      <PostListHeader></PostListHeader>
      {postList.map((post: any, index: number) => {
        const { title, description } = post.frontMatter;
        return <PostItem key={title} postIndex={index} title={title} description={description} />;
      })}
    </Container>
  );
};

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PostListHeader = styled.header``;

export default PostList;
