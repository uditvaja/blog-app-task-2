import React, { useState, useEffect } from 'react';
import { createPost, updatePost, getPostById } from './postService';
import { useNavigate, useParams } from 'react-router-dom';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      async function fetchPost() {
        const post = await getPostById(id);
        setTitle(post.title);
        setContent(post.content);
      }
      fetchPost();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updatePost(id, { title, content });
    } else {
      await createPost({ title, content });
    }
    navigate('/');
  };

  return (
    <div className="post-form card p-4">
      <h1>{id ? 'Edit Post' : 'Create a New Post'}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">Content</label>
          <textarea
            className="form-control"
            id="content"
            rows="5"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">{id ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default PostForm;
