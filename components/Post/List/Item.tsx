import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { motion } from "framer-motion";
import { palette } from "styles/palette";
import { useRouter } from "next/router";

interface Props {
  title: string;
  filename: string;
  description: string;
  postId: number;
}

const variants = {
  visible: (sequence: number) => ({
    opacity: 1,
    transition: {
      delay: sequence * 0.3,
    },
  }),
  hidden: { opacity: 0 },
};

const PostItem = ({ filename, title, description, postId }: Props) => {
  return (
    <Link href={`/post/${filename}`} passHref>
      <Container custom={postId} variants={variants} initial="hidden" animate="visible">
        <h2 className="post-title">{title}</h2>
        <h3 className="post-description">{description}</h3>
      </Container>
    </Link>
  );
};

const Container = styled(motion.li)`
  padding: 2rem;
  border-radius: 4px;
  border: 1px solid ${palette.grey[100]};
  cursor: pointer;

  .post-title {
    color: ${palette.grey[700]};
    font-size: 1.4rem;
    margin-bottom: 0.625rem;
    line-height: 1.4;
  }

  .post-description {
    font-weight: 400;
    color: ${palette.grey[400]};
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-bottom: 0.375rem;
    font-size: 1.2rem;

    .post-title {
      font-size: 1.2rem;
      margin-bottom: 0.375rem;
    }

    .post-description {
      font-size: 0.75rem;
    }
  }
`;

export default PostItem;
