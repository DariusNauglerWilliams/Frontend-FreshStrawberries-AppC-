
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    if (!id) return;

    fetch(`https://localhost:7195/api/movies/${id}`)
      .then((response) => response.json())
      .then((result) => setMovie(result));
  }, []);

  return (
    <>


      <h2>Movie Details</h2>
      <div>
        <p><strong>Title:</strong> {movie.title}</p>
        <p><strong>ID:</strong> {movie.id}</p>
        <p><strong>Description:</strong> {movie.description}</p>
      </div>




      <Link to="/">
        <button>Go Back</button>
      </Link>

















      
    </>





    
  )
  }



export default Details