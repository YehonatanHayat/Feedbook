import React, { useState } from 'react';
import './loginPage.css'; // Import CSS file for styling
import CreateNew from './createNew'; // Import the RegistrationModal component
function LoginPage() {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
    document.body.classList.toggle('night-mode');
  };

  return (
    <div className={`container ${isNightMode ? 'night-mode' : ''}`}>
      {/* Night Mode Icon */}
      <div
        className={`night-mode-btn ${isNightMode ? 'night-mode-icon' : ''}`}
        onClick={toggleNightMode}
      >
<i class="bi bi-moon"></i>
      </div>

      {/* Left Section */}
      <div className="left-section">
        <h1>Foobook</h1>
        <p>Connect with friends and the world around you on Foobook.</p>
      </div>

      {/* Right Section */}
      <div className="right-section-container">
        <div className="right-section">
          <div className="right-section-content">
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Email or phone number"
            />
          </div>
          <div className="right-section-content">
            <input
              type="password"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Password"
            />
          </div>
          <div className="right-section-content">
            <button type="button" className="btn btn-primary">
              Login
            </button>
          </div>
          <div className="right-section-content">
            {/* Trigger the modal when the button is clicked */}
            <button
              type="button"
              className="btn btn-success"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal" // Specify the ID of the modal
            >
              Create new account
            </button>
          </div>
        </div>
      </div>
            {/* Render the RegistrationModal component */}
            <CreateNew />


   



    </div>
  );
}

export default LoginPage;
