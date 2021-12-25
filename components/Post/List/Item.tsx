import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { motion } from "framer-motion";
import { palette } from "styles/palette";
import { useRouter } from "next/router";

interface Props {
  title: string;
  filename: string;
  date: string;
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
  moveRight: { scale: 1.03, backgroundColor: palette.notion.common.divider },
};

const PostItem = ({ filename, date, title, description, postId }: Props) => {
  return (
    <Link href={`/post/${filename}`} passHref>
      <Container
        custom={postId}
        variants={variants}
        initial="hidden"
        animate="visible"
        whileHover="moveRight"
      >
        <h2 className="post-title">{title}</h2>
        <h3 className="post-description">{description}</h3>
        <p className="post-date">{date}</p>
      </Container>
    </Link>
  );
};

const Container = styled(motion.li)`
  padding: 2rem;
  border-radius: 4px;
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

  .post-date {
    margin-top: 0.75rem;
    font-size: 0.875rem;
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
