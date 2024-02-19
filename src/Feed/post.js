import React from 'react';
import './post.css'; // Assuming you have a CSS file for post styling

function Post({ id, content, author, date, pic, onDelete }) {
    const handleDelete = () => {
      onDelete(id);
    };
  
    return (
      <div className="post">
        <button className="delete-button" onClick={handleDelete}>
          &#10006;
        </button>
        <div className="author-date-container">
          <h3 className="author">{author}</h3>
          <p className="date">Date: {date}</p>
        </div>
        <p className="content">{content}</p>
        <img src={pic} alt="Post-pic" className="post-pic" />
       
      </div>
    );
  }
  
  export default Post;
  
