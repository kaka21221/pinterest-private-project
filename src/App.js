import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import { db } from './firebase';

function App() {
  const [posts, setPosts] = useState([
    {
      username: "davizão",
       caption: "WOW it works67",
       imageUrl: "https://react-etc.net/files/2016-07/logo-578x270.png"

    },
    {
    username: "rogerio",
    caption: "WOW it works65",
    imageUrl: "https://react-etc.net/files/2016-07/logo-578x270.png"
    }
  ]);

  // useEFFECT Runs a piece of code based on a specific condition

  useEffect(() => {

    }, []);

  return (
    <div className="app">
      <div className="app__header">
        <img
        className="app__headerimage"
        src="https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt=""
        />  
      </div>
      
      <h1>instagram clone By daviaugusto🚀</h1>

      {
        
       posts.map(post => (
       <Post username={post.username} caption={post.caption} imageUrl="https://react-etc.net/files/2016-07/logo-578x270.png"/>
         ))
      }



        
        <Post username="Davi augusto adm" caption="ola eu sou o criador" imageUrl="https://i.pinimg.com/originals/41/c3/4b/41c34bdd830e99e7063331ff9bc5ad13.jpg" />
      </div>
  );
}

export default App;