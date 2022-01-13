import React from "react";
import styled from "@emotion/styled";
import PostItem from "./Item";
import useCategoryHeader from "hooks/useCategoryHeader";
import { palette, shadow } from "styles/palette";
import Divider from "components/Portfolio/common/Divider";
import Post from "type/Post";

type PostListProps = {
  postList: Post[];
};

const sortByDate = (a: Post, b: Post) => {
  return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime();
};

const PostList = ({ postList }: PostListProps) => {
  const postCountText = `현재 ${postList.length}건의 글이 있어요!`;
  postList.sort(sortByDate);
  const { icon, categoryName, displayName } = useCategoryHeader();

  return (
    <Container>
      <PostListHeader>
        <CategoryTitle>
          <>{icon}</>
          <h2>{displayName}</h2>
        </CategoryTitle>
        <p>{postCountText}</p>
      </PostListHeader>
      <Divider />
      {postList.map((post: Post, index: number) => {
        const { filename, frontMatter } = post;
        const { date, title, description, tags, thumbnailUrl } = frontMatter;
        return (
          <PostItem
            key={title}
            postIndex={index}
            thumbnail={thumbnailUrl}
            date={date}
            filename={filename}
            title={title}
            tagList={tags}
            description={description}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  background-color: white;
  padding: 3rem;
  box-shadow: ${shadow.card};
  gap: 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const PostListHeader = styled.header`
  align-items: center;

  & > p {
    font-size: 0.875rem;
    font-weight: 400;
    color: ${palette.grey[400]};
  }
`;

const CategoryTitle = styled.div`
  display: flex;
  font-size: 2rem;
  margin-bottom: 0.875rem;
  font-weight: 700;

  & > svg {
    margin-right: 0.75rem;
    fill: ${palette.grey[500]};
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export default PostList;
