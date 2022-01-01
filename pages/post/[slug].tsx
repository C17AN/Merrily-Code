import React, { ReactPropTypes } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import styled from "@emotion/styled";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { Div, H1, H2, H3, Code, P, Image, Strong, Hr, Blockquote } from "components/Blog/Template";
import { palette } from "styles/palette";

type PostPageProps = {
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
};

const components = {
  code: Code,
  h1: H1,
  h2: H2,
  h3: H3,
  div: Div,
  p: P,
  img: Image,
  strong: Strong,
  hr: Hr,
  blockquote: Blockquote,
};

const PostPage = ({ mdxSource }: PostPageProps) => {
  return (
    <Container>
      <MDXRemote {...mdxSource} components={components} />
    </Container>
  );
};

const Container = styled.div`
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
