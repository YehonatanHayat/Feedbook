

import React, { useState, useEffect } from 'react';
import Post from './post.js';
import './postList.css';

function PostList({ user, token }) {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    // Fetch posts when the component mounts
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:8080/posts', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
  
      const data = await response.json();
      setPosts(data); // Update state with the fetched posts
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };




  // const addPost = (content, pic = null) => {
  //   const formData = new FormData();
  //   formData.append('content', content);
  //   formData.append('author', user.name);
  //   if (pic) {
  //     formData.append('pic', pic);
  //   }

  //   fetch(`http://localhost:8080/posts`, {
  //     method: 'POST',
  //     headers: {
  //       authorization: `bearer ${token}`,
  //     },
  //     body: formData,
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Failed to add post');
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const newPost = {
  //         id: data.id,
  //         pic: data.pic || '',
  //         content: data.content,
  //         author: user.name, // Set author to the current user's name
  //         date: data.date,
  //         editable: true,
  //       };
  //       setPosts([...posts, newPost]);
  //     })
  //     .catch((error) => {
  //       console.error('Error adding post:', error);
  //     });
  // };

  const addPost = (content, author, pic = null) => {
    const newPost = {
        id: posts.length + 1,
        pic: pic || '',
        content,
        author,
        date: new Date().toLocaleString(),
        editable: true,
        
    };
    setPosts([...posts, newPost]);
    };




  // // Function to delete a post
  // const deletePost = (id) => {
  //   setPosts(posts.filter((post) => post.id !== id));
  // };


  const deletePost = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/posts/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete post');
      }
  
      // Remove the deleted post from the state
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
      // Handle error (e.g., show error message)
    }
  };






  const handleEditPost = (id, editedContent) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === id) {
        return { ...post, content: editedContent };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const content = e.target.elements.content.value;
  //   const picInput = e.target.elements.pic;
  //   if (!picInput.files || !picInput.files[0]) {
  //     addPost(content);
  //     e.target.reset();
  //     return;
  //   }

  //   const reader = new FileReader();
  //   reader.onload = (event) => {
  //     const pic = event.target.result;
  //     addPost(content, pic);
  //     e.target.reset();
  //   };
  //   reader.readAsDataURL(picInput.files[0]); // Read the selected file as a data URL
  // };



  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const content = e.target.elements.content.value;
  //   const picInput = e.target.elements.pic;
    
  //   const formData = new FormData();
  //   formData.append('content', content);
  //   formData.append('author', user.name);
  //   if (picInput.files && picInput.files[0]) {
  //     formData.append('pic', picInput.files[0]);
  //   }


  //   try {
  //     const response = await fetch('http://localhost:8080/posts', {
  //       method: 'POST',
  //       headers: {
  //         authorization: `Bearer ${token}`,
  //         'Content-Type': 'application/json'
  //       },
  //       body: formData,
  //     });

  //     if (!response.ok) {
  //       throw new Error('Failed to add post');
  //     }

  //     const data = await response.json();
  //     // Update state with the newly created post
  //   } catch (error) {
  //     console.error('Error adding post:', error);
  //   }
  // };



  const handleSubmit = async (e) => {
    e.preventDefault();
    const content = e.target.elements.content.value;
    const picInput = e.target.elements.pic;
    
    let photoUrl = '';
    if (picInput.files && picInput.files[0]) {
      // Process the photo object to get the URL or file path
      // For example, if using FileReader API to get the data URL
      const reader = new FileReader();
      reader.onload = (e) => {
        photoUrl = e.target.result; // Assign the data URL to photoUrl
        createPost({ content, author: user.name, photo: photoUrl });
      };
      reader.readAsDataURL(picInput.files[0]); // Read the file as data URL
    } else {
      createPost({ content, author: user.name });
    }
  };
  
  const createPost = async (postData) => {
    try {
      const response = await fetch('http://localhost:8080/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(postData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add post');
      }
  
      //const data = await response.json();
      await response.json();
      fetchPosts();
      // Update state with the newly created post
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };
  




  return (
    <div className="feed">
      <form onSubmit={handleSubmit}>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Add Post
        </button>
        <div className="modal fade AddPostModel" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-centered">
            <div className="modal-content post">
              <div className="modal-body post">
                <input type="text" name="content" placeholder="Enter post content" />
                <input type="file" name="pic" placeholder="Choose an image" accept="image/*" />
                <div className="button-group">
                  <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">
                    Done
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div className="post-container">
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            content={post.content}
            author={post.author}
            date={post.date}
            pic={post.pic}
            onDelete={deletePost}
            onEdit={handleEditPost}
            editable={post.editable}
          />
        ))}
      </div>
    </div>
  );
}

export default PostList;
