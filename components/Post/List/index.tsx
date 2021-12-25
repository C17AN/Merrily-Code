import React from "react";
import styled from "@emotion/styled";
import PostItem from "./Item";
import useCategoryHeader from "hooks/useCategoryHeader";
import { palette } from "styles/palette";
import Divider from "components/Portfolio/common/Divider";

interface Props {
  postList: any;
}

const PostList = ({ postList }: Props) => {
  const { icon, categoryName, displayName } = useCategoryHeader();

  return (
    <Container>
      <PostListHeader>
        <>{icon}</>
        <h2>{displayName}</h2>
      </PostListHeader>
      <Divider />
      {postList.map((post: any, index: number) => {
        const { filename } = post;
        const { postId, date, title, description, category } = post.frontMatter;
        return (
          categoryName === category && (
            <PostItem
              key={title}
              postId={postId}
              date={date}
              filename={filename}
              title={title}
              description={description}
            />
          )
        );
      })}
    </Container>
  );
};

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PostListHeader = styled.header`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;

  & > svg {
    margin-right: 0.75rem;
    fill: ${palette.grey[500]};
  }
`;

export default PostList;
