
import React, { useEffect, useState } from 'react';
import { getPostById, deletePost } from '../components/postService';
import { useParams, useNavigate } from 'react-router-dom';

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const data = await getPostById(id);
      setPost(data);
    }
    fetchData();
  }, [id]);

  const handleDelete = async () => {
    await deletePost(id);
    navigate('/');
  };

  return (
    <div className="post-details">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Posted on: {new Date(post.date).toLocaleDateString()}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => navigate(`/edit/${id}`)}>Edit</button>
    </div>
  );
};

export default PostDetails;
