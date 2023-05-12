/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import { useState } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";


export function Content() {

  const [posts] = useState([
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
    

  ]);


  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
    
  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} />
      
      <button onClick={toggleModal}>Show modal</button>
      <Modal show={showModal} onClose={toggleModal} >
        <p>I AM HERE 🐐</p>
        <img src="https://i.imgur.com/YF9q89S.jpg" width="350px" height="350px" alt="Picture of a  with large eyes"></img>
      </Modal>

    </div>

  );
}