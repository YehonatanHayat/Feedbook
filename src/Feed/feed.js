
import Search from './search.js';
import FaceLogo from './faceLogo.js';
import Options from './options.js';
import People from './people.js';
import Icon from './icons.js';
import Card from './card.js';
import Menu from './menu.js';
import Status from './status.js';
import PostList from './postList.js';
import Add from './addPost.js';
import Comment from './comment.js';
import React, { useState } from 'react';
function Feed() {

  const [isDarkMode, setIsDarkMode] = useState(false);

   const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
      // Toggle dark mode class on the body element
      document.body.classList.toggle('dark-mode');
    };



  return (
    <div className="feed-container" style={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 50px)', backgroundColor: '#f5f5f5' }}> {/* Set background color */}
      {/* Adjust minHeight to account for the height of the top and bottom bars */}
      <div className="container text-center" style={{ flex: 1 }}>
        <div className="row row-cols-auto">
          <div className="col">
            <Search />
            <FaceLogo />
            <Options isDarkMode={isDarkMode} />
          </div>
          <div className="col-5">
            <Icon /> <Status /> <Card /> <PostList />
          </div>
          <div className="col">
            <Menu isDarkMode={isDarkMode}  toggleDarkMode={toggleDarkMode}/> <People /> 
          </div>
        </div>
      </div>
      <Add/>
     <Comment/>
    </div>
  );
}

export default Feed;
