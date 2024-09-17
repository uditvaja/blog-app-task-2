import React, { useState } from 'react';
import { login } from './AuthService';
import { useNavigate } from 'react-router-dom';
import './style.css'
import { Link } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login({ email, password });
      localStorage.setItem('token', data.token); 
      
      navigate('/'); 
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <>
   
   
    <div class="container">
    <div class="title">Login</div>
    <div class="content">
      <form onSubmit={handleSubmit}>
        <div class="user-details">
          
         
          <div class="input-box">
            <span class="details">Email</span>
            <input type="text" placeholder="Enter your email"value={email}
        onChange={(e) => setEmail(e.target.value)} required/>
          </div>
     
          <div class="input-box">
            <span class="details">Password</span>
            <input type="text" placeholder="Enter your password" value={password}
        onChange={(e) => setPassword(e.target.value)} required/>
          </div>
        <div class="button"> <p>Don't have an accouunt?</p> <Link className='lbtn' to="/Register">Register</Link></div>
        </div>
        
        
        <div class="button">
          <input type="submit" value="Login"/>
        </div>
     
    </form>
      </div>
    </div>


    </>
  );
};

export default Login;
