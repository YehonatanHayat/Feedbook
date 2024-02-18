




import React, { useState, useEffect } from 'react';
import './loginPage.css';
import FeedPage from './FeedPage.js';
import CreateNew from './createNew';
import { useUserInitialization } from './users.js';
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';

function LoginPage() {
  const [isNightMode, setIsNightMode] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { users } = useUserInitialization();
  const navigate = useNavigate(); 
  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  useEffect(() => {
    if (isNightMode) {
      document.body.classList.add('night-mode');
    } else {
      document.body.classList.remove('night-mode');
    }
  }, [isNightMode]);

  const handleLogin = () => {
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      console.log('Login successful');
      setIsLoggedIn(true);
      setError('');
     navigate('/feed');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
  
      <div className={`container ${isNightMode ? 'night-mode' : ''}`}>
        <div
          className={`night-mode-btn ${isNightMode ? 'night-mode-icon' : ''}`}
          onClick={toggleNightMode}
        >
          <i className="bi bi-moon"></i>
        </div>

        <div className="left-section">
          <h1>Feedbook</h1>
          <p>Connect with friends and the world around you on Foobook.</p>
        </div>

        <div className="right-section-container">
          <div className="right-section">
            <div className="right-section-content">
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Email or phone number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="right-section-content">
              <input
                type="password"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <div className="error">{error}</div>}
            <div className="right-section-content">
             
                <button type="button" className="btn btn-primary" onClick={handleLogin}>
                  Login
                </button>
              
            </div>
            <div className="right-section-content">
              <button
                type="button"
                className="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Create new account
              </button>
            </div>
          </div>
        </div>
        
        {/* <Routes>
          <Route
            path="/feed"
            element={isLoggedIn ? <FeedPage /> : <Navigate to="/feed"/>}
          />
        </Routes> */}
      
      <CreateNew />
      </div>
  );
}

export default LoginPage;



