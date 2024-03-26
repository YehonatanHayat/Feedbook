import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

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

            <img src={userData.photo} width='40' height='50' alt="User Profile" className="profile-picture" />
            <div className="profile-buttons">
              <button>Posts</button>
              <button>Friends</button>
              <button>XXX</button>
              <button>LLL</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
