
import React from 'react';

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

function Feed() {
  return (
    <div className="feed-container" style={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 50px)' }}>
      {/* Adjust minHeight to account for the height of the top and bottom bars */}
      <div className="container text-center" style={{ flex: 1 }}>
        <div className="row row-cols-auto">
          <div className="col">
            <Search />
            <FaceLogo />
            <Options />
          </div>
          <div className="col-5">
            <Icon /> <Status /> <Card /> <PostList />
          </div>
          <div className="col">
            <Menu /> <People /> 
          </div>
        </div>
      </div>
      <Add/>

    </div>
  );
}

export default Feed;
