import { useParams } from "react-router-dom";

const PostPage = () => {
  const { slug } = useParams();
  return (
    <div>
      <h1>Post slug: {slug}</h1>
      Image full width
      <p>Post content</p>
    </div>
  );
};

export default PostPage;
