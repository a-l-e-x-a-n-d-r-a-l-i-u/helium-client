import { useParams } from "react-router-dom";

const PostPage = () => {
  const { slug } = useParams();

  return <div>Post slug: {slug}</div>;
};

export default PostPage;
