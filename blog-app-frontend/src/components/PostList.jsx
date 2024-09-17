import React, { useEffect, useState } from 'react';
import { getPosts } from './postService';
import { deletePost } from './postService';
import { getToken } from './AuthService';
import { useNavigate } from 'react-router-dom';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const token = getToken();
      const data = await getPosts(token);
      setPosts(data);
    }
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const token = getToken();
    await deletePost(id, token);
    setPosts(posts.filter(post => post._id !== id));
  };

  return (
    <div className="post-list">
      <button className="btn btn-primary mb-3" onClick={() => navigate('/create')}>Create Post</button>
      {posts.map(post => (
        <div key={post._id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.content}</p>
            <p className="text-muted">{new Date(post.date).toLocaleDateString()}</p>
            <button className="btn btn-danger me-2" onClick={() => handleDelete(post._id)}>Delete</button>
            <button className="btn btn-secondary" onClick={() => navigate(`/edit/${post._id}`)}>Edit</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
