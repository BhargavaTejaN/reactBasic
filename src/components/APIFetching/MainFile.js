import React, { useState, useEffect } from "react";
import PostsFile from "./PostsFile";

const MainFile = () => {
  // declaring empty post array
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const options = {
        method: "GET",
      };

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        options
      );
      const data = await response.json();

      if (response.ok) {
        setPosts([...data]);
      }
    } catch (error) {
      console.log("ERROR WHILE FETCHING THE API : ", error);
    }
  };

  // useEffect for fetching the api in react
  useEffect(() => {
    fetchPosts();
  }, []);

  return(
    <div>
        {posts.map((each) => (
            <PostsFile key={each.id} details={each} />
        ))}
    </div>
  )
};

export default MainFile;
