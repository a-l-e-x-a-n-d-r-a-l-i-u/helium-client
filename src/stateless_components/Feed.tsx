import React from 'react';
import postlist from '../posts.json'

const PostList: React.FC = () => {
  return (<div className='postlist'>
    {postlist.map((post, i) => {
      return (<div className='postlist card'>
        <h2>{i + 1}. {post.title}</h2>
        <p>{post.author}</p>
        <p>{post.date}</p>
        <p>{post.content}</p>
      </div>)
    }
    )}
  </div>)
}

const FeedNav: React.FC = () => {
  return (<div id='feed-nav'>
    <div className='feed-tab'>
    <a href='/add'>+</a>
    </div>
    <div className='feed-tab'>
    <a href='/'>For you</a>
    </div>
    <div className='feed-tab'>
    <a href='/?feed=following&source=home'>Following</a>
    </div>
    </div>)
}

const Feed = () => {
  return (
    <>
    <FeedNav />
    <PostList />
    </>)
}

export default Feed