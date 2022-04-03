import Home from "components/Home";
import Head from "next/head";
import fs from "fs";
import path from "path";
import React, { createContext, useState } from "react";
import matter from "gray-matter";
import Post from "type/Post";
import Portfolio from "components/Home/Portfolio";

type BasePageProps = {
  posts: Post[];
};

export const RecentPostContext = createContext<{ recentPostList: Post[] } | null>(null);

const BasePage = ({ posts }: BasePageProps) => {
  const description = `코드와 음악, 그리고 맛있는 음식을 사랑하는 개발자입니다.`;
  const ogSiteName = "즐겁게, 코드";
  const recentPosts = posts.slice(5);
  const [recentPostList, setRecentPostList] = useState<Post[]>(recentPosts);

  console.log(posts);

  return (
    <>
      <Head>
        {/* <meta name="robots" content="noindex" /> */}
        <meta name="description" content={description} />
        <meta property="og:site_name" content={ogSiteName} />
        <meta property="og:description" content={description} />
      </Head>
      {/* <RecentPostContext.Provider value={{ recentPostList }}>
        <Home recentPosts={recentPosts} />
      </RecentPostContext.Provider> */}
      <Portfolio />
    </>
  );
};

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

export default BasePage;
