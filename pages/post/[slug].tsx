import React, { ReactPropTypes } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { Div, H1, H2, H3, Code, P, Image, Strong } from "components/Post/Template";

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
  // p: (props: PostPageProps) => <Heading2 {...props} />,
};

const PostPage = ({ mdxSource }: PostPageProps) => {
  return <MDXRemote {...mdxSource} components={components} />;
};

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
