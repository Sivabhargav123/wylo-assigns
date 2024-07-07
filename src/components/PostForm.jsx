import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPost, editPost } from '../redux/postsSlice';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css'
const PostForm = ({ post }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (post) {
      dispatch(editPost({ ...post, title, content }));
    } else {
      dispatch(addPost({ id: Date.now(), title, content }));
    }
    navigate('/all-posts');
  };

  return (
    <>
    <form onSubmit={handleSubmit} className='form-div-main'>
      <div className='form-div'>
        <label>Title :</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className='form-div'>
        <label>Content :</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <button type="submit">{post ? 'Save Changes' : 'Create Post'}</button>
    </form>
    </>
   
  );
};

export default PostForm;
