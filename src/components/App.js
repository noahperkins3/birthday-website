import { Routes, Route, Navigate } from 'react-router-dom';
import { Map } from './Travel.js';
import { NavBar } from './NavBar.js';
import { Notes } from './Notes.js';
import { BookForm, BookResults } from './Books.js';
import { Home } from './Home.js';
import { JournalForm, PastEntries } from './Journal.js';

import React, { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';


const firebaseConfig = {
  apiKey: "AIzaSyA1Z1zoMFD61o18FPwE0yciQCMwNDLaYys",
  authDomain: "mia-birthday-21.firebaseapp.com",
  databaseURL: "https://mia-birthday-21-default-rtdb.firebaseio.com",
  projectId: "mia-birthday-21",
  storageBucket: "mia-birthday-21.appspot.com",
  messagingSenderId: "577060289282",
  appId: "1:577060289282:web:7a978344139210efa2e01b",
  measurementId: "G-KFYBZ48C9X"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

function App() {

  function handleSubmit(newPost) {
    const newPostRef = db.ref('posts').push();
    const postId = newPostRef.key;
    newPostRef.set(newPost)
      .then(() => {
        console.log('Post saved with ID:', postId);
      })
      .catch((error) => {
        console.error('Error saving post:', error);
      });
  }

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsRef = db.ref('posts');
    postsRef.on('value', (snapshot) => {
      const postData = snapshot.val();
  
      // Convert the object of posts to an array with IDs included
      const postArray = Object.entries(postData).map(([id, post]) => ({
        id, // Add the post ID to each post object
        ...post, // Include the rest of the post data
      }));
  
      setPosts(postArray);
    });
  
    return () => {
      postsRef.off('value');
    };
  }, []);

  function handleDelete(postId) {
    // Get the reference to the specific entry to be deleted
    const postRef = db.ref('posts').child(postId);

    // Remove the entry from the database
    postRef.remove()
      .then(() => {
        console.log('Post deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting post:', error);
      });
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/travel" element={<Map />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/books" element={<BookForm />} />
        <Route path="/journal" element={<JournalForm onSubmit={handleSubmit} handleDelete={handleDelete} posts={posts} />} />
        <Route path="/past-entries" element={<PastEntries handleDelete={handleDelete} posts={posts} />} />
      </Routes>
    </div>
  );
}

export default App;
