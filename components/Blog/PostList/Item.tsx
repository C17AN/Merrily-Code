import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";
import TagList from "./common/TagList";
import { palette } from "styles/palette";
import { motion } from "framer-motion";

type PostItemProps = {
  title: string;
  filename: string;
  thumbnail: string;
  date: string;
  description: string;
  tagList?: string[];
} & { postIndex: number };

const variants = {
  fadeIn: (sequence: number) => ({
    opacity: 1,
    transition: {
      delay: sequence * 0.3,
    },
  }),
  hidden: { opacity: 0 },
  moveRight: { scale: 1.03, backgroundColor: palette.notion.common.divider },
  visible: {
    opacity: 1,
  },
};

const parseDate = (date: string) => {
  const [year, month, day] = date.split("-");
  return `${year}년 ${month}월 ${day}일`;
};

const PostItem = ({
  filename,
  date,
  title,
  thumbnail,
  tagList,
  description,
  postIndex,
}: PostItemProps) => {
  const parsedDate = parseDate(date);

  return (
    <Link href={`/post/${filename}`} passHref>
      <Container
        custom={postIndex}
        variants={variants}
        initial="hidden"
        animate="fadeIn"
        whileHover="moveRight"
      >
        <Image
          src={thumbnail}
          width={96}
          height={96}
          layout="fixed"
          objectFit="cover"
          alt={title}
          className="post-thumbnail"
        />
        <Content>
          <h2 className="post-title">{title}</h2>
          <h3 className="post-description">{description}</h3>
          <MetaData>
            <p className="post-date">{parsedDate}</p>
            {tagList?.length && <TagList tagList={tagList} />}
          </MetaData>
        </Content>
        {/* <ReadMoreButton /> */}
      </Container>
    </Link>
  );
};

const Container = styled(motion.li)`
  padding: 2rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;

  .post-thumbnail {
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    padding: 0;
    & > span {
      display: none !important;
    }
  }
`;

const Content = styled.section`
  margin-left: 2.5rem;

  .post-title {
    color: ${palette.grey[700]};
    font-size: 1.4rem;
    margin-bottom: 0.375rem;
    line-height: 1.4;
  }

  .post-description {
    font-weight: 400;
    line-height: 1.4;
    color: ${palette.grey[400]};
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
    margin-bottom: 0.375rem;
    margin-left: 0;
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

const MetaData = styled.div`
  display: flex;
  margin-top: 0.75rem;
  gap: 0.5rem;
  align-items: center;

  .post-date {
    font-size: 0.625rem;
    border-radius: 4px;
    padding: 0.25rem 0.5rem;
    display: inline-block;
    color: ${({ color }) => color};
    background-color: ${palette.blue[500] + 20};
  }

  @media (max-width: 768px) {
    margin-top: 0.5rem;

    .post-date {
      font-size: 0.625rem;
    }
  }
`;

export default PostItem;
