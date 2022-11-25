import React from "react";
import postlist from "../posts.json";
import image from "../images/thispersondoesnotexist.jpeg";

const PostList: React.FC = () => {
  return (
    <div className='postlist'>
      {postlist.map((post, i) => {
        return (
          <div className='postlist card'>
            {/* could use next.js for responsive images, if can be bothered learning something new */}
            {/* should use a compressed version of images for a profile icon as well, otherwise it will take forever to load */}
            <div className='post-metadata'>
              <img src={image} className='profile-icon' />
              {/* actually the src should be more like {process.env.PUBLIC_URL + image} except you haven't set up process.env yet */}
              {/* include post.org if it's written by a person or by an org. but also tweak getposts.js to hide if one or the other doesn't exist, we don't need a billion cards with 'Unknown author in Save the Children', just say 'Save the Children' */}
              <div className='author-date'>
                <span>{post.author}</span> - <span>{post.date}</span>
              </div>
            </div>
            <h2>
              {post.id}. {post.title}
            </h2>
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

    <div id='feed-nav'>
      <a href='recommendations'>
        <div className='tab symbol'>+</div>
      </a>

      <a href='/'>
        <div className='tab selected-tab'>For you</div>
      </a>

      <a href='/?feed=following&source=home'>
        <div className='tab'>Following</div>
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
