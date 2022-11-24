import React from "react";
import postlist from "../posts.json"

const PostList: React.FC = () => {
  return (<div className="postlist">
    {postlist.map((post, i) => {
      return (<div className="postlist card">
        <p>{i}. {post.title}</p>
        <p>{post.author}</p>
        <p>{post.date}</p>
        <p>{post.content}</p>
      </div>)
    }
    )}
  </div>)
}

export default PostList