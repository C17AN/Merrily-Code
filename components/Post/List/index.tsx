import React from "react";
import PostItem from "./Item";

interface Props {
  postList: any;
}

const PostList = ({ postList }: Props) => {
  return (
    <div>
      {postList.map((post: any) => {
        const { title } = post.frontMatter;
        console.log(title);
        return <PostItem key={title} title={title} />;
      })}
    </div>
  );
};

export default PostList;
