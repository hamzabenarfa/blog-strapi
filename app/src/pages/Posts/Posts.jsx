import React from "react";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import "./Posts.scss";
function Posts() {
  const { data, Loading, error } = useFetch(
    "http://localhost:1337/api/posts?populate=*"
  );

  if (Loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Something went wrong{console.log(error)}</div>;
  }

  return (
    <div>
      <div className="container">
        {data.data.map((post) => (
          <div key={post.id} className="post">
            <h1 className="display-4">{post.attributes.Title}</h1>
            <div>{post.attributes.text.substring(0, 400)}...</div>
            <Link to={`/post/${post.id}`} className="btn btn-primary">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
