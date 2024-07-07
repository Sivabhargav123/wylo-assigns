import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PostItem from './PostItem';

const PostsDisplay = ({ onEdit }) => {
  const posts = useSelector((state) => state.posts.posts);
  const navigate = useNavigate();

  const handleCreatePost = () => {
    onEdit(null); // Reset the editing post
    navigate('/create');
  };

  return (
    <div className="posts-display">
      <h1>Posts</h1>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} onEdit={onEdit} />
      ))}
      <button onClick={handleCreatePost}>Create Post</button>
    </div>
  );
};

export default PostsDisplay;
