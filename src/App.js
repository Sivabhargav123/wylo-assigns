import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import PostsDisplay from './components/PostsDisplay';
import CreatePost from './pages/CreatePost';
import AllPosts from './components/AllPosts';
import { store } from './redux/store';
import './styles/styles.css';

const App = () => {
  const [editingPost, setEditingPost] = useState(null);

  const handleEditPost = (post) => {
    setEditingPost(post);
  };

  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<PostsDisplay onEdit={handleEditPost} />} />
            <Route path="/create" element={<CreatePost post={editingPost} />} />
            <Route path="/all-posts" element={<AllPosts onEdit={handleEditPost} />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
