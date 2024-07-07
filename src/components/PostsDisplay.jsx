import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Women_img from  '../styles/Images/woman-character-listening.avif'
import boy_img from '../styles/Images/male-photographer.avif'
import girl_img from '../styles/Images/woman-character-listening.avif'
import NavBar from '../pages/NavBar';
import '../styles/styles.css'

const PostsDisplay = ({ onEdit }) => {
  const navigate = useNavigate();

  const handleCreatePost = () => {
    onEdit(null); // Reset the editing post
    navigate('/create');
  };


  return (
    <>
    <NavBar/>
     <div className="posts-display">
      <h1>
        <span className="word">Welcome<span className="superscript">s</span> </span>
        <span className="word">Post Website</span>
      </h1>
      <div className='carousel-container'>
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          <div>
            <img src={Women_img} alt="Example" />
          </div>
          <div>
            <img src={boy_img} alt="Example" />
          </div>
          <div>
            <img src={girl_img} alt="Example" />
          </div>
        </Carousel>
      </div>
      <div className='posts-btn-container'>
        <button onClick={handleCreatePost}>Create Post</button>
      </div>
    </div>
    </>
  );
};

export default PostsDisplay;
