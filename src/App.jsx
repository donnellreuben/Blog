/* eslint-disable no-unused-vars */
import { useState } from "react";

function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  )
}


function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>          
        <div>
          Title: <input type="text" />
        </div>
        <div>
          Body: <input type="text" />
        </div>
        <button type="submit">Create post</button>
      </form>
    </div>
  )
}

function PostsIndex(props) {
  console.log(props.posts);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {props.posts.map(post => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <img src={post.image_url} alt="" />
          <p>{post.body}</p>
          <button>More info</button>
        </div>  
      ))}
         
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2023</p>
    </footer>
  )
}

function Content() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Tyrese Haliburton",
      body: "Point Guard for Indiana Pacers",
      image_url: "https://i.imgur.com/7jIuefA.jpg",
    },
    {
      id: 2,
      title: "LeBron James",
      body: "Point Forward for the Los Angeles Lakers",
      image_url: "https://i.imgur.com/uMjbqA6.jpg",
    },
    {
      id: 3,
      title: "Jaylen Brown",
      body: "Shooting Guard for the Boston Celtics",
      image_url: "https://i.imgur.com/OuFTfqc.jpg",
    },
  ])
  
  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts}/>
    </div>
    
  )
}

function App() {
  return (
    <div>
      <Header />
      <Content />   
      <Footer />   
    </div>
  );
}

export default App;

// make web request to get data from rails
// select the part of the response that we want

// make a variable with the data
// show that data on HTML page