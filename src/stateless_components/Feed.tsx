import React from "react";
import postlist from "../posts.json";
import profilePlaceholder from "../images/thispersondoesnotexist.jpeg";
import postPlaceholder from "../images/post-thumbnail-placeholder.jpg";

const PostList: React.FC = () => {
  return (
    <div className='postlist'>
      {postlist.map((post, i) => {
        return (
          <article>
            {/* className='meteredContent' */}
            {/* could use next.js for responsive images, if can be bothered learning something new */}
            {/* should use a compressed version of images for a profile icon as well, otherwise it will take forever to load on a speedtest */}
            <div className='card-header'>
              <img className='profile-thumbnail' src={profilePlaceholder} />
              {/* actually the src should be more like {process.env.PUBLIC_URL + image} except you haven't set up process.env yet */}
              {/* include post.org if it's written by a person or by an org. but also tweak getposts.js to hide if one or the other doesn't exist, we don't need a billion cards with 'Unknown author in Save the Children', just say 'Save the Children' */}
              <div className='author-date-container'>
                <span>{post.author}</span>
                <span>·</span>
                <span>{post.date}</span>
              </div>
            </div>
            <div className='post-summary'>
              <img className='post-thumbnail' src={postPlaceholder} />
              <h2>
                {post.id}. {post.title}
              </h2>
              <p className='post-blurb'>{post.content}</p>
            </div>
          </article>
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
