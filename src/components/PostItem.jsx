import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deletePost } from '../redux/postsSlice';

const PostItem = ({ post, onEdit }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = () => {
    onEdit(post);
    navigate('/create');
  };

  const handleDelete = () => {
    dispatch(deletePost(post.id));
  };

  return (
    <div className="post-item">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete} style={{ marginLeft: '10px', backgroundColor: '#dc3545' }}>Delete</button>
    </div>
  );
};

export default PostItem;
