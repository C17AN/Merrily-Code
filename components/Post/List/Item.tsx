import styled from "@emotion/styled";
import React from "react";
import { palette } from "styles/palette";

interface Props {
  title: string;
  description: string;
}

const PostItem = ({ title, description }: Props) => {
  return (
    <Container>
      <h2 className="post-title">{title}</h2>
      <h3 className="post-description">{description}</h3>
    </Container>
  );
};

const Container = styled.li`
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid ${palette.grey[100]};
  cursor: pointer;

  .post-title {
    color: ${palette.grey[700]};
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }

  .post-description {
    font-weight: 400;
    color: ${palette.grey[400]};
  }
`;

export default PostItem;
