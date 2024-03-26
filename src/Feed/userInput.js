import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import './userInput.css'; // Import the CSS file


function UserInput({user, token}) {
  const navigate = useNavigate(); 
  const handleClick = () => {
    navigate(`/profile/${user.email}`, { state: { user, token } });
  };


  console.log('y token:', token);
  return (
    <div className="user-container">
      {user && (
        <>
          <div
            onClick={handleClick}
            className="user-info"
          >
            <img src={user.photo} alt="User Photo" className="user-photo" />
            <div className="user-name">{user.name}</div>
          </div>
        </>
      )}
    </div>
  );
}

export default UserInput;

