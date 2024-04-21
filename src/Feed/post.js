import React, { useState } from 'react';
import './post.css';
import LikeButton from './like.js';
import Share from './share.js';
import CommentButton from './comment'; 
import { Link } from 'react-router-dom';

function Post({ id, content, author, date, pic, onDelete, onEdit}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);


  const handleDelete = () => {
    onDelete(id);
  };

  const handleEdit = () => {
    onEdit(id);
  };

  const handleSave = () => {

    setIsEditing(false);
    setEditedContent(editedContent);
  };

  const handleContentChange = (e) => {
    setEditedContent(e.target.value);
  };




  

  return (
    <div className="post">
      <button className="delete-button" onClick={handleDelete} data-testid="delete-button">
        &#10006;
      </button>
      <div className="author-date-container">
      <Link to={`/profile/${author}`} className="author-link">
          <h3 className="author">{author}</h3>
        </Link>
        <p className="date">{date}</p>
      </div>
      <div className="content">{content}</div>
      <img src={pic} alt="Post-pic" className="post-pic" />
      <div className="action-buttons">
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
        <LikeButton />
        <CommentButton postId={id} />
        <Share />
      </div>
    </div>
  );
}


export default Post;
