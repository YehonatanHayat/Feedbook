import React, { useState, useEffect } from 'react'; 
import Post from './post.js';
import './postList.css';

function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('/api/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    const deletePost = (id) => {
        setPosts(posts.filter(post => post.id !== id));
    };

    return (
        <div className="feed">

           
            {/* Render all posts */}
            {posts.map((post) => (
                <Post
                    key={post.id}
                    id={post.id}
                    content={post.content}
                    author={post.author}
                    date={post.date}
                    pic={post.pic}
                    onDelete={deletePost}
                />
            ))}
            
        </div>
    );
}

export default PostList;