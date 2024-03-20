import React from 'react';
import './post.css'; // Assuming you have a CSS file for post styling
import LikeButton from './like.js';
import Share from './share.js';
import CommentButton from './comment'; // Import the CommentButton component

function Post({ id, content, author, date, pic, onDelete }) {
    const handleDelete = () => {
      onDelete(id);
    };
  
    return (
      <div className="post">
        <button className="delete-button" onClick={handleDelete} data-testid="delete-button">
          &#10006;
        </button>
        <div className="author-date-container">
          <h3 className="author">{author}</h3>
          <p className="date">{date}</p>
        </div>
        <p className="content">{content}</p>
        <img src={pic} alt="Post-pic" className="post-pic" />
        <div className="action-buttons">
          <LikeButton />
          <CommentButton postId={id} /> 
          <Share/>
        </div>
      </div>
    );
}

export default Post;
