type Post = {
  filename: string;
  frontMatter: {
    title: string;
    category: string;
    date: string;
    description: string;
    tags?: string[];
    thumbnailUrl: string;
  };
};
//

export default Post;
