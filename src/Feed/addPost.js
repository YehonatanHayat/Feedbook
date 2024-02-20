import React, { useState } from 'react';
import Post from './post.js';
import './postList.css';
import sun from '../images/sun.jpg';
import beach2 from '../images/beach2.jpg';
import UserInput from './userInput.js';

function PostList() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            pic: sun,
            content: 'Here comes the sun!',
            author: <UserInput/>,
            date: new Date().toLocaleString()
        },
        {
            id: 2,
            pic: beach2,
            content: 'I got beaches',
            author: <UserInput/>,
            date: new Date().toLocaleString()
        },
        // Add more predefined posts as needed
    ]);

    // const addPost = (content, author, pic = null) => {
    //     const newPost = {
    //         id: posts.length + 1,
    //         pic: pic || '', // Use provided pic or empty string if not provided
    //         content,
    //         author,
    //         date: new Date().toLocaleString()
    //     };
    //     setPosts([...posts, newPost]);
    // };

    // Function to delete a post
    const deletePost = (id) => {
        setPosts(posts.filter(post => post.id !== id));
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const content = e.target.elements.content.value;
    //     const picInput = e.target.elements.pic;
    //     if (!picInput.files || !picInput.files[0]) {
    //         // If no file is selected, add the post without a picture
    //         addPost(content, <UserInput />);
    //         e.target.reset();
    //         return;
    //     }
    
    //     const reader = new FileReader();
    //     reader.onload = (event) => {
    //         const picUrl = event.target.result;
    //         addPost(content, <UserInput />, picUrl);
    //         e.target.reset();
    //     };
    //     reader.readAsDataURL(picInput.files[0]); // Read the selected file as a data URL
    // };
    

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
            {/* Example form to add new posts */}
            
        </div>
    );
}

export default PostList;