import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import "./Home.scss";
import useFetch from "../../hooks/useFetch";
import Card from "../../components/card/Card";
import Weather from "../../components/weather/Weather";
function Home() {
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
      <h1 className="display-1">Top Posts :</h1>

      {/* 
{
  data.data.map(post=> 
    <div class="card mb-3 x"  key={post.id}>
  <div class="row no-gutters">
    <div class="col-md-4">
    <img src={` http://localhost:1337${post.attributes.image.data[0].attributes.url}`} class="card-img" alt="..." />
    
    
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{post.attributes.Title}</h5>
        <p class="card-text">{post.attributes.text.substring(0,400)}...</p>
        <p class="card-text"><small class="text-muted">Last updated At {post.attributes.updatedAt} </small></p>
        <Link to={`/post/${post.id }`} className="btn btn-primary"> Read More</Link>
      </div>
    </div>
  </div>
</div>
  )

} */}
      <div className="cont">
        <div>
          <Card />
          <Card />
        </div>

        <div className="item">
          <Weather />
        </div>
      </div>
    </div>
  );
}

export default Home;
