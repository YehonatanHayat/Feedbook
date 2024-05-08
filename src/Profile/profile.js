
//working code

// import React, { useState, useEffect } from 'react';
// import { useParams, useLocation } from 'react-router-dom';
// import './profile.css';
// import Prof from './profOpt.js';
// import FriendRequest from './friendReq.js';

// function Profile() {
//   const [userData, setUserData] = useState(null);
//   const { email } = useParams();
//   const [token, setToken] = useState(null);
//   const location = useLocation(); 

//   useEffect(() => {
//     if (location.state && location.state.token) {
//       setToken(location.state.token);
//     }
    
//     const fetchUserData = async () => {
//       try {
//         const userDataResponse = await fetch(`http://localhost:8080/api/profile/${email}`, {
//           headers: {
//             authorization: `bearer ` + token
//           }
//         });
//         const userDataJson = await userDataResponse.json();
//         setUserData(userDataJson);
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchUserData();
//   }, [email, token, location.state]);


//   return (
//     <div className="profile-container">
//       {userData && (
//         <div className="profile">
//           <div className="profile-header">
//             <img
//               src={userData.photo}
//               alt="User Profile"
//               className="profile-picture"
//               style={{
//                 borderRadius: '50%', // Makes the image round
//                 width: '200px', // Adjust the width as needed
//                 height: '200px', // Adjust the height as needed
//               }}
//             />
//             <h2 className="profile-username">{userData.name}</h2>
//             <p>Date of Birth: {userData.dob}</p>
//             <p>Gender: {userData.gender}</p>
//             <p>friends: {userData.friends}</p>
//             <p>requestsForFriends: {userData.requestsForFriends} </p>
//             <Prof token={token} email={email} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile;


import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './profile.css';
import Prof from './profOpt.js';
//import FriendRequest from './friendReq.js';

function Profile() {
  const [userData, setUserData] = useState(null);
  const { email } = useParams();
  const [token, setToken] = useState(null);
  const [userRelation, setUserRelation] = useState(0);
  //const [connectedEmail, setConnectedEmail] = useState(null); 
  const [connectedUser, setConnectedUser] = useState(null);
  const location = useLocation(); 


  
  useEffect(() => {
    if (location.state && location.state.token) {
      setToken(location.state.token);
    }

    if (location.state && location.state.connectedUser) {
      setConnectedUser(location.state.connectedUser);
    }


    const fetchUserData = async () => {
      try {
        const userDataResponse = await fetch(`http://localhost:8080/api/profile/${email}`, {
          headers: {
            authorization: `bearer ` + token
          }
        });
        const userDataJson = await userDataResponse.json();
        setUserData(userDataJson);

        console.log('userDataJson:', userDataJson);
        console.log(email);
        if(connectedUser && userDataJson.friends.includes(connectedUser.email)) {
          setUserRelation(1); // User is a friend

        } else if(connectedUser && userDataJson.requestsForFriends.includes(connectedUser.email)) {
          setUserRelation(2); // User has sent a friend request

        } else if (connectedUser && connectedUser.requestsForFriends.includes(userDataJson.email)) {
          setUserRelation(3); // User received a friend request from this user

        }else if(connectedUser && connectedUser.email === userDataJson.email) {
          setUserRelation(4); // User is looking at their own profile
        }else {
          setUserRelation(0); 
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [email, token, location.state]);


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
                borderRadius: '50%', 
                width: '600px', 
                height: '200px',
              }}
            />
            {/* <h2 className="profile-username">{userData.name}</h2>
            <p>Date of Birth: {userData.dob}</p>
            <p>Gender: {userData.gender}</p>
            <p>friends: {userData.friends}</p>
            <p>requestsForFriends: {userData.requestsForFriends} </p>
            <p> friends? {userRelation}</p>
            {userRelation === 1 && <p>You are friends with this user.</p>}
            {userRelation === 2 && <p>You have sent a friend request to this user.</p>}
            {userRelation === 3 && <p> this user sent you request</p>} */}
            <Prof userData={userData} token={token} email={email} areFriends={userRelation} connectedEmail={connectedUser.email} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
