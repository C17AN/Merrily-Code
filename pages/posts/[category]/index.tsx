import React from "react";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import PostList from "components/Post/List";
import getCategoryNameList from "lib/utils/getCategoryNameList";
import getCategoryDataList from "lib/utils/getCategoryDataList";
import { useRouter } from "next/router";

interface Props {}

const PostListPage = ({ posts }: Props) => {
  const router = useRouter();
  console.log(router);
  console.log(getCategoryDataList());
  return <PostList postList={posts} />;
};

export async function getStaticPaths() {
  const categoryList = getCategoryNameList();
  const categoryPathList = categoryList.map((category) => ({
    params: {
      category,
    },
  }));
  return {
    paths: categoryPathList,
    fallback: false,
  };
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "pages/posts/[category]");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join(process.cwd(), "pages/posts/[category]", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      title: filename.split(".")[0],
    };
  });

  return { props: { posts } };
}

export default PostListPage;
