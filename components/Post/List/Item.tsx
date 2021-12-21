import React from "react";

interface Props {
  title: string;
}

const PostItem = ({ title }: Props) => {
  return <div>{title}</div>;
};

export default PostItem;
