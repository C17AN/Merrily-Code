import React, { ReactPropTypes } from "react";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import styled from "@emotion/styled";
import FrontMatter from "type/FrontMatter";
import { useRouter } from "next/router";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import {
  Div,
  H1,
  H2,
  H3,
  Code,
  P,
  A,
  Image,
  Strong,
  Hr,
  Blockquote,
  Ul,
  Li,
} from "components/Blog/Template";
import { palette } from "styles/palette";
import Divider from "components/Portfolio/common/Divider";
import Tag from "components/Blog/PostList/common/Tag";
import TagList from "components/Blog/PostList/common/TagList";
import useUtterances from "hooks/useUtterances";
import PostProfile from "components/Blog/PostProfile";
import endpoints from "constants/endpoints";

type PostPageProps = {
  frontMatter: FrontMatter;
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
};

const components = {
  code: Code,
  h1: H1,
  h2: H2,
  h3: H3,
  div: Div,
  p: P,
  a: A,
  ul: Ul,
  li: Li,
  img: Image,
  strong: Strong,
  hr: Hr,
  blockquote: Blockquote,
};

const PostPage = ({ frontMatter, mdxSource }: PostPageProps) => {
  const { title, tags, date, description, category, thumbnailUrl } = frontMatter;
  const isUtterancesActive = useUtterances(".post-container");
  const canonicalURL = endpoints.BASE_URL + decodeURI(useRouter().asPath);
  const ogImageUrl = endpoints.BASE_URL + thumbnailUrl;
  const ogSiteName = "즐겁게, 코드";

  return (
    <>
      <Head>
        <title>즐겁게, 코드 | {title}</title>
        <link rel="canonical" href={canonicalURL} />
        <meta name="author" content="C17AN" />
        <meta name="description" content={description} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:site_name" content={ogSiteName} />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
      </Head>
      <Container className="post-container">
        <Title>{title}</Title>
        <Description>{description}</Description>
        <TagList tagList={tags} />
        <Divider />
        <MDXRemote {...mdxSource} components={components} />
        <Divider />
        <PostProfile />
      </Container>
    </>
  );
};

const Container = styled.div`
  max-width: 60rem;
  margin: 0 auto;

  p,
  div {
    color: #555;
  }
  code {
    background-color: ${palette.grey[50]};
    color: #ec4899;
    font-weight: 600;
    font-size: 0.75rem;
    padding: 2px 4px;
    border-radius: 0.25rem;
    font-family: menlo, Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace !important;
  }
`;

const Title = styled.h1`
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    line-height: 1.25;
  }
`;

const Description = styled.h3`
  color: ${palette.grey[300]};
  font-weight: 400;
  margin: 0.875rem 0;

  @media (max-width: 768px) {
    font-size: 0.75rem;
    line-height: 1.25;
    margin: 0.5rem 0 0.75rem 0;
  }
`;

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join(process.cwd(), "data/posts"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join(process.cwd(), "data/posts", slug + ".mdx"),
    "utf-8"
  );
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

export default PostPage;
