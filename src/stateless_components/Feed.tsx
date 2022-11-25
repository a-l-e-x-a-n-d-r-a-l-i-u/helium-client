import React from "react";
import postlist from "../posts.json";

const PostList: React.FC = () => {
  return (
    <div className="postlist">
      {postlist.map((post, i) => {
        return (
          <div className="postlist card">
            {/* make the cards pretty bc it's very ugly right now */}
            <h2>
              {post.id}. {post.title}
            </h2>
            <p>{post.author}</p>
            <p>{post.date}</p>
            <p>{post.content}</p>
          </div>
        );
      })}
    </div>
  );
};

const FeedNav: React.FC = () => {
  return (
    // how to programmatically show the 'selected' state ???????? use for loop to loop thru list of tabs ????
    // feed-nav should also be sticky (position: fixed) to the top when you're scrolling on mobile
    <div id="feed-nav">
      <a href="/recommendations">
        <div className="tab symbol">+</div>
      </a>

      <a href="/">
        <div className="tab selected-tab">For you</div>
      </a>

      <a href="/?feed=following&source=home">
        <div className="tab">Following</div>
      </a>
    </div>
  );
};

const Feed = () => {
  return (
    <>
      <FeedNav />
      <PostList />
    </>
  );
};

export default Feed;
