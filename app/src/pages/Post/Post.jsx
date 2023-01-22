import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from "../../hooks/useFetch";

function Post() {
  const { id } = useParams()
  const { data, Loading, error } = useFetch(
    "http://localhost:1337/api/posts/"+id+"?populate=*"
  );
  
  if (Loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Something went wrong</div>;
  }
  
  console.log(data.data.attributes)
  return (
    <div>

      <div className="container">

          <div  className="post">
          <h1 className="display-4">{data.data.attributes.Title}</h1>
            <div>{data.data.attributes.text}...</div>
            <img src={` http://localhost:1337${data.data.attributes.image.data[0].attributes.url}`} class="card-img" alt="..." />

          </div>

      </div>
    </div>
  )
}

export default Post