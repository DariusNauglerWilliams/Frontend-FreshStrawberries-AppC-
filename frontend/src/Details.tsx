import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [ratings, setRatings] = useState([]);
  const [genres, setGenres] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!id === null) return;

    fetch(`https://localhost:7195/api/movies/${id}`).then(response => response.json()).then(data => setMovie(data));

      fetch(`https://localhost:7195/api/ratings`).then(response => response.json()).then(data => setRatings(data));
      fetch(`https://localhost:7195/api/genres`).then(response => response.json()).then(data => setGenres(data));

     

            fetch(`https://localhost:7195/api/reviews`).then(response => response.json()).then(data => setReviews(data));

       
  }, []);

  return (
    <>
   {/* Loading Before movie details incase not loaded in yet*/}
    {!movie ? (
      <p>Loading...</p>
    ) : (
      <>
      <h2>Movie Details</h2>
      <div>
        <p><strong>Title:</strong> {movie.title}</p>
         <img src={movie.image} width="400" />
        <p><strong>Description:</strong> {movie.description}</p>
        <p><strong>Director:</strong> {movie.director}</p>
         <p><strong>Release Year:</strong> {movie.releaseYear}</p>
        <p><strong>Duration:</strong> {movie.duration}</p>
         <p><strong>Rating:</strong> {ratings.find(r => r.id === movie?.ratingId)?.name}</p>
            <p><strong>Genre:</strong> {genres.find(g => g.id === movie?.genreId)?.name}</p>   
            <p><strong>Published Critic Reviews:</strong> {reviews.filter(r => r.isPublished).length}</p>    
        <br></br>
        
      <p><strong>Published Reviews Down Here:</strong></p>
      <hr></hr>
       {reviews.filter(r => r.isPublished).map(r => (
  <div key={r.id}>
     <p><strong>Name:</strong> {r.createdBy}</p>
    <p><strong>Said:</strong> {r.content}</p>
    <p><strong>Rating:</strong> {r.rating}</p>
    <hr></hr>
  </div>
))}

      </div>




      <Link to="/">
        <button>Go Back</button>
      </Link>
      </>
    )}











      
    </>





    
  )
  }



export default Details