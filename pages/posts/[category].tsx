import React from "react";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import PostList from "components/Posts/List";
import getCategoryDataList from "lib/utils/getCategoryDataList";

type Props = {
  posts: any;
};

const PostListPage = ({ posts }: Props) => {
  return <PostList postList={posts} />;
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
