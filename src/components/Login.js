import React, { useState } from "react";
import axios from 'axios';


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser(username, password);
  };

  const loginUser = async (username, password) => {
    try {
      const response = await fetch('http://localhost/my_codeigniter/public/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg bg-white">
      <h2 className="text-2xl font-bold text-center mb-6" style={{ color: '#000080' }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md text-black"
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md text-black"
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          type="submit"
          className="py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 mx-auto block"
          style={{ width: '100px' }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
