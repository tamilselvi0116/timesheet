// src/App.js
import React from 'react';
import './App.css'; 
import Login from './components/Login'; 

function App() {
  const handleLogin = (username, password) => {
    
    console.log('Logging in with:', username, password);
    
  };

  return (
    <div style={{ backgroundColor: '#008000' }} className="text-white p-5 min-h-screen">
  <h1 className="text-3xl font-bold text-center mb-8" style={{ color: '#000080' }}></h1>

  <Login onSubmit={handleLogin} />
</div>

  );
}

export default App;
