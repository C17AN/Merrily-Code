import React from "react";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import PostList from "components/Blog/PostList";
import useCategoryHeader from "hooks/useCategoryHeader";
import getCategoryDataList from "lib/utils/getCategoryDataList";
import PostEmpty from "components/Blog/Empty";
import Post from "type/post";

type PostListPageProps = {
  posts: Post[];
};

const PostListPage = ({ posts }: PostListPageProps) => {
  const { categoryName } = useCategoryHeader();
  const postList = posts.filter((post) => {
    const { category } = post.frontMatter;
    return category === categoryName;
  });

  return postList.length ? <PostList postList={postList} /> : <PostEmpty />;
};

export async function getStaticPaths() {
  const categoryList = getCategoryDataList();
  const categoryPathList = categoryList.map((category) => ({
    params: {
      category: category.categoryName,
    },
  }));
  return {
    paths: categoryPathList,
    fallback: false,
  };
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "data/posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join(process.cwd(), "data/posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      filename: filename.split(".")[0],
    };
  });

  return { props: { posts } };
}

export default PostListPage;
