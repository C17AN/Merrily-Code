import React from "react";
import matter from "gray-matter";
import fs from "fs";
import path from "path";

interface Props {}

const PostListPage = ({ posts }: Props) => {
  return <div></div>;
};

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
