import React from 'react';
import { useSelector } from 'react-redux';
import PostItem from './PostItem';
import NavBar from '../pages/NavBar';
import '../styles/styles.css'; // Make sure to import the CSS file

const AllPosts = ({ onEdit }) => {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <>
    <NavBar/>
    <div className="all-posts">
      <h1>All Posts</h1>
      <div className='all-posters'>
      {posts.map((post) => (
        <div className='posts-box'>
 <PostItem key={post.id} post={post} onEdit={onEdit} />
        </div>
       
      ))}
    </div>
    </div>
    </>
   
  );
};

export default AllPosts;
