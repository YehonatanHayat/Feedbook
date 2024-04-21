import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './profile.css';
import Prof from './profOpt.js';
import FriendRequest from './friendReq.js';

function Profile() {

  const [userData, setUserData] = useState(null);
  const { email } = useParams();
  const [token, setToken] = useState(null);
  const location = useLocation(); 

  useEffect(() => {

        if (location.state && location.state.token) {
      setToken(location.state.token);
    }
    console.log('profile token:', token);
    const fetchUserData = async () => {
      try {
        const userDataResponse = await fetch(`http://localhost:8080/api/users/${email}`, {
          headers: {
            authorization: `bearer ` + token
          }
        });
        const userDataJson = await userDataResponse.json();
        setUserData(userDataJson);
        console.log('userDataJson:', userDataJson);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [email, token]);

  return (
    <div className="profile-container">
      {userData && (
        <div className="profile">
          <div className="profile-header">

          <img
              src={userData.photo}
              alt="User Profile"
              className="profile-picture"
              style={{
                borderRadius: '50%', // Makes the image round
                width: '200px', // Adjust the width as needed
                height: '200px', // Adjust the height as needed
              }}
            />
             <h2 className="profile-username">{userData.name}</h2>
            
           <Prof/>

          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
