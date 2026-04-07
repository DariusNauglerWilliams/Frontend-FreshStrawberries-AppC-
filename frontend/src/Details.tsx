
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
         <img src={movie.image} width="400" />
        <p><strong>Description:</strong> {movie.description}</p>
        <p><strong>Director:</strong> {movie.director}</p>
         <p><strong>Release Year:</strong> {movie.releaseYear}</p>
        <p><strong>Duration:</strong> {movie.duration}</p>
         <p><strong>Rating:</strong> {movie.ratingId}</p>
            <p><strong>Genre:</strong> {movie.genreId}</p>   
             <p><strong>Published Critic Reviews:</strong> {movie.IsPublished}</p>      
        
      
       

      </div>




      <Link to="/">
        <button>Go Back</button>
      </Link>

















      
    </>





    
  )
  }



export default Details