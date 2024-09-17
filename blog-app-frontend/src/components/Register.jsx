import React, { useState } from 'react';
import { register } from './AuthService';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); 
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'username':
        setUsername(value); 
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const userData = { username, email, password }; 
      const response = await register(userData);
      if (response.message === 'Registration successful') {
        navigate('/login'); 
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (err) {
      console.error(err); 
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <>
      <div className="auth-form">
        <h1>Register</h1>
      </div>
      <div className="title">Registration</div>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="user-details">
            <div className="input-box">
              <span className="details">Username</span>
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                onChange={handleChange}
                value={username} 
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Email</span>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Password</span>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Password"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Confirm Password</span>
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
              />
            </div>
          </div>
          <div className="button">
            <input type="submit" value="Register" />
          </div>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </>
  );
};

export default Register;
