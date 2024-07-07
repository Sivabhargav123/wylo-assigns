import React from 'react';
import PostForm from '../components/PostForm';

const CreatePost = ({ post }) => {
  return (
    <div className="create-post">
      <h1>{post ? 'Edit Post' : 'Create Post'}</h1>
      <PostForm post={post} />
    </div>
  );
};

export default CreatePost;
