import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
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
      <div className="button-group">
        <button className="edit-button" onClick={handleEdit}>
          <FaEdit /> Edit
        </button>
        <button className="delete-button" onClick={handleDelete}>
          <FaTrash /> Delete
        </button>
      </div>
    </div>
  );
};

export default PostItem;
