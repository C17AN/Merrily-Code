import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React from "react";
import { palette } from "styles/palette";

interface Props {
  title: string;
  description: string;
  postIndex: number;
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

const PostItem = ({ title, description, postIndex }: Props) => {
  return (
    <Container custom={postIndex} variants={variants} initial="hidden" animate="visible">
      <h2 className="post-title">{title}</h2>
      <h3 className="post-description">{description}</h3>
    </Container>
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
  }

  .post-description {
    font-weight: 400;
    color: ${palette.grey[400]};
  }
`;

export default PostItem;
