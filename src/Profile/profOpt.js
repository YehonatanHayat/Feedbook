import React, { useEffect, useState } from 'react';
import './profOpt.css'

function NavigationBar({token, email, areFriends, connectedEmail}) {
  const [activeTab, setActiveTab] = useState('home');
  const [friendStatus, setFriendStatus] = useState(null);
  const [friendsRequestStatus, setFriendsRequestStatus] = useState(null);

  console.log('friendStatus', areFriends);
  console.log('connectedEmail', connectedEmail);
  // useEffect(() => {

  //   console.log("Checking friendship status...");
  //   const fetchData = async () => {
  //     try {
  //       // Fetch friend status
  //       const friendResponse = await fetch('http://localhost:8080/api/friend-status', {
  //         method: 'GET',
  //         headers: {
  //         'Content-Type': 'application/json',
  //         authorization: `Bearer ${token}`,
  //       },
  //     });
  //     const friendData = await friendResponse.json();
  //     setFriendStatus(friendData.status);


  //     const friendsRequestResponse = await fetch('http://localhost:8080/api/friends-request-status', {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         authorization: `Bearer ${token}`,
  //       }
  //     });
      
  //     const friendsRequestData = await friendsRequestResponse.json();
  //     setFriendsRequestStatus(friendsRequestData.status);
      
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };
  // }, []);
 


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
        // Optionally, you can update the UI to reflect the request status
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
      // Optionally, you can update the UI to reflect the friendship status
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
      // Optionally, you can update the UI to reflect the friendship status
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
    <div className="navbar-containerp">
      <div className="navbarp">
        <button onClick={() => showContent('home')}>Home</button>
        <button onClick={() => showContent('about')}>About</button>
        <button onClick={() => showContent('contact')}>Contact</button>
        <button onClick={() => showContent('posts')}>posts</button>
        {renderButton()}
      </div>

      <div className="containerp">
        {activeTab === 'home' && <HomeContent />}
        {activeTab === 'about' && <AboutContent />}
        {activeTab === 'contact' && <ContactContent />}
        {activeTab === 'posts' && <PostsContent />}
      </div>
    </div>
  );
}

function HomeContent() {
  return <div>Home Content Goes Here</div>;
}

function AboutContent() {
  return <div>About Content Goes Here</div>;
}

function ContactContent() {
  return <div>Contact Content Goes Here</div>;
}

function PostsContent() {
  return <div>Posts Content Goes Here</div>;
}
export default NavigationBar;
