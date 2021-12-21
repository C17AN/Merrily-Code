import React from "react";
import styled from "@emotion/styled";
import PostItem from "./Item";
import { palette } from "styles/palette";

interface Props {
  postList: any;
}

const PostList = ({ postList }: Props) => {
  return (
    <Container>
      {postList.map((post: any) => {
        const { title, description } = post.frontMatter;
        return <PostItem key={title} title={title} description={description} />;
      })}
    </Container>
  );
};

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default PostList;
