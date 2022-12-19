import React from "react";
import postlist from "../posts.json";
import profilePlaceholder from "../images/thispersondoesnotexist.jpeg";
import postPlaceholder from "../images/post-thumbnail-placeholder.jpg";
import { Link, NavLink } from "react-router-dom";

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
}

const PostList: React.FC = () => {
  return (
    <div className='postlist'>
      {postlist.map((post, i) => {
        return (
          <article>
            {/* should use a compressed version of images, otherwise it will take forever to load on a speedtest */}
            <div className='wrapper'>
              <div className='card-header'>
                <img className='profile-thumbnail' src={profilePlaceholder} alt={post.author} />
                {/* actually the src should be more like {process.env.PUBLIC_URL + image} except you haven't set up process.env yet */}
                <div className='author-date-container'>
                  <span>{post.author}</span>
                  <span>·</span>
                  <span>{post.date}</span>
                </div>
              </div>
              <div className='thumbnail-width'></div>
            </div>

            <div className='card-body'>
              <div className='blurb-container'>
                <Link to='/post/:slug'>
                  <h2>{post.title}</h2>
                </Link>
                {/* style link text black */}
                <p className='blurb'>{post.content.split(".")[0]}...</p>
              </div>
              <img className='post-thumbnail xs-only' src={postPlaceholder} alt={post.title} />
            </div>

            <div className='wrapper'>
              <div className='card-footer'>
                <Link to='/tag/:tagMame'>
                  {/* Dynamically generate tag links */}
                  <div className='tag'>{capitalizeFirstLetter(post.tag)}</div>
                </Link>
                {/* Scoped out the following parts of Medium.com for this project */}
                {/* <div>Based on your reading history/Selected for you</div> */}
                {/* <div>Icons for Add / Minus</div> */}
              </div>
              <div className='thumbnail-width'></div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

const FeedNav: React.FC = () => {
  return (
    <div id='feed-nav'>
      <NavLink to='/recommendations'>
        <div className='tab symbol'>+</div>
      </NavLink>

      <NavLink to='/'>
        {({ isActive }) => {
          return isActive ? <div className='tab selected'>For you</div> : <div className='tab'>For you</div>;
        }}
      </NavLink>

      <NavLink to='/?feed=following&source=home'>
        <div className='tab'>Following</div>
      </NavLink>
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
