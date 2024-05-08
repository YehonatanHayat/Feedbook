import React, { useEffect, useState } from 'react';
import './profOpt.css'

function NavigationBar({token, email, areFriends, connectedEmail, userData}) {
  const [activeTab, setActiveTab] = useState('home');
  //const [friendStatus, setFriendStatus] = useState(null);
 // const [friendsRequestStatus, setFriendsRequestStatus] = useState(null);

  console.log('userData',userData);
  const friendsList = userData ? userData.friends : [];

  



  console.log('fr',friendsList);

  console.log('friendStatus', areFriends);
  console.log('connectedEmail', connectedEmail);


  const showContent = (tab) => {
    setActiveTab(tab);
  };

  const sendFriendRequest = async () => {
    try {
      console.log("Sending friend request...");
      const response = await fetch('http://localhost:8080/api/profile/add-friend-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userEmail: email, connectedEmail: connectedEmail }),
      });
      if (response.ok) {
        console.log("Friend request sent successfully.");
        window.location.reload();

      } else {
        console.error("Failed to send friend request.");
      }
    } catch (error) {
      console.error('Error sending friend request:', error);
    }
  };



  const cancelFriendsRequest = async () => {
    try {
      console.log("Canceling friend request...");
      const response = await fetch('http://localhost:8080/api/profile/cancel-friend-request', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userEmail: email, connectedEmail: connectedEmail }),
      });
      if (response.ok) {
        console.log("Friend request canceled successfully.");
        window.location.reload();

      } else {
        console.error("Failed to cancel friend request.");
      }
    } catch (error) {
      console.error('Error canceling friend request:', error);
    }
  };




const cancelFriendship = async () => {
  try {
    console.log("Canceling friendship...");
    const response = await fetch('http://localhost:8080/api/profile/cancel-friendship', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ userEmail: email, connectedEmail: connectedEmail }),
    });
    if (response.ok) {
      console.log("Friendship canceled successfully.");
      window.location.reload(); 
    } else {
      console.error("Failed to cancel friendship.");
    }
  } catch (error) {
    console.error('Error canceling friendship:', error);
  }
};

const acceptFriendRequest = async () => {
  try {
    console.log("Accepting friend request...");
    const response = await fetch('http://localhost:8080/api/profile/accept-friend-request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ userEmail: email, connectedEmail: connectedEmail }),
    });
    if (response.ok) {
      console.log("Friend request accepted successfully.");
      window.location.reload(); 
    } else {
      console.error("Failed to accept friend request.");
    }
  } catch (error) {
    console.error('Error accepting friend request:', error);
  }
};










  const renderButton = () => {
    switch (areFriends) {
      case 1:
        return <button onClick={cancelFriendship}>Cancel Friendship</button>;
      case 2:
        return <button onClick={cancelFriendsRequest}>Cancel Request</button>;
      case 3:
        return <button onClick={acceptFriendRequest}> Accept Request</button>;
      case 4:
        return;
      default:
        return <button onClick={sendFriendRequest}>Send Friend Request</button>;
    }
  };

  return (
    <div style={{ width: '100%', background: '#f0f0f0', padding: '20px' }}>
      <div className="navbar-containerp" style={{ width: '80%', margin: 'auto' }}>
      <div className="navbarp">
        <button onClick={() => showContent('home')}>Home</button>
        <button onClick={() => showContent('about')}>About</button>
        <button onClick={() => showContent('contact')}>Contact</button>
        <button onClick={() => showContent('posts')}>posts</button>
        {renderButton()}
      </div>

      <div className="containerp">
        {activeTab === 'home' && <HomeContent />}
        {activeTab === 'about' && <AboutContent userData={userData}/> }
        {activeTab === 'contact' && <ContactContent friendsList={friendsList}/>}
        {activeTab === 'posts' && <PostsContent />}
      </div>
    </div>
    </div>
  );
}

function HomeContent() {
  return <div>Home Content Goes Here</div>;
}

function AboutContent({userData}) {
  return (
    <div>
     
      {/* Use userData here */}
      <p>Name: {userData.name}</p>
      <p>Date of Birth: {userData.dob}</p>
      <p>Gender: {userData.gender}</p>
      {/* Add other profile data you want to display */}
    </div>
  );
}

function ContactContent({ friendsList }) {
  return (
    <div>
     
      <h3>Friends List:</h3>
      <ul>
        {friendsList.map((friend, index) => ( 



          <li key={index}>{friend}</li>
        ))}
      </ul>
    </div>
  );
}

function PostsContent() {
  return <div>Posts Content Goes Here</div>;
}
export default NavigationBar;
