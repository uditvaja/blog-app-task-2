import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PostList from './components/PostList';
import PostDetails from './components/PostDetails';
import PostForm from './components/PostForm';
import Login from './components/Login';
import Register from './components/Register';
import { getToken } from './components/AuthService';
import Navbar from './components/Navbar';

const PrivateRoute = ({ children }) => {
  return getToken() ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <div className="app container">
        <Navbar/>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/posts/:id" element={<PrivateRoute><PostDetails /></PrivateRoute>} />
          <Route path="/create" element={<PostForm />} />
          <Route path="/edit/:id" element={<PrivateRoute><PostForm /></PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
