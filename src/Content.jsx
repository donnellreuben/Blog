import { useState } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";

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

  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} />
    </div>

  );
}
