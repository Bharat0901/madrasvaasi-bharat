// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Make an API call to your Django backend for login
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        username: username,
        password: password,
      });
      console.log(response.data);  // Log the response data for debugging
      // Handle the response data or redirect the user as needed
      if (response.status === 200) {
        console.log('Login successful!');
        // Redirect the user to the homepage
        navigate('/');
      } else {
        console.log('Login failed. Server returned:', response.status, response.data);
        // Handle the case where login failed
      }
    } catch (error) {
      console.error('Error making API call:', error);
      // Handle the error as needed
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-black p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-gray-400 text-2xl font-bold mb-4">Login</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="username">
              Username:
            </label>
            <input
              className="border rounded w-full py-2 px-3"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="password">
              Password:
            </label>
            <input
              className="border rounded w-full py-2 px-3"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            type="button"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
