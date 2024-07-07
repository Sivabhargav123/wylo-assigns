import React from 'react';
import PostForm from '../components/PostForm';
import NavBar from '../pages/NavBar';
import '../styles/styles.css'
const CreatePost = ({ post }) => {
  return (
    <>
    <NavBar/>
    <div className="create-post">
      <div className='create-down-container'>
      <h1 className=''>{post ? 'Edit Post' : 'Create Post'}</h1>
      <PostForm post={post}  />
      </div>
    </div>
    </>
  );
};

export default CreatePost;
