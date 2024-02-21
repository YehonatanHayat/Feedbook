import React, { useState } from 'react';
import UserInput from './userInput.js';
import { useLocation } from 'react-router-dom';

function CommentButton() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newComment.trim() !== '') {
            setComments([...comments, newComment]);
            setNewComment('');
        }
    };

    const location = useLocation();
    const user = location.state && location.state.user;

    return (
        <div>
            
            <i className="bi bi-chat-dots" data-bs-toggle="modal" data-bs-target="#commentModal"></i>

            <div className="modal fade" id="commentModal" tabIndex="-1" aria-labelledby="commentModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="commentModalLabel">Comments</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <input className="form-control" id="commentInput" placeholder='Add comment' value={newComment} onChange={handleCommentChange}/>
                                </div>
                                <button type="submit" className="btn btn-primary">Add Comment</button>
                            </form>
                            <hr /> {/* Divider between input and comments */}
                            <div className="comment-list">
                                {comments.map((comment, index) => (
                                    <div key={index} className="comment-container">
                                        {user && (
                                            <div className="user-info" style={{ fontWeight: 'bold' }}>{user.name}</div>
                                        )}
                                        <div className="comment" style={{ backgroundColor: '#f2f2f2', padding: '10px', borderRadius: '5px' }}>{comment}</div>
                                        {index !== comments.length - 1 && <hr className="comment-divider" />}
                                    </div>
                                ))}
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentButton;
