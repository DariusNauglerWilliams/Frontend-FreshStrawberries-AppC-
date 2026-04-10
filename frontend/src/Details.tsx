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

     

            fetch(`https://localhost:7195/api/reviews/${id}`).then(response => response.json()).then(data => setReviews(data));
     
       
  }, []);

  return (
    <>
   {/* test push.      Loading Before movie details incase not loaded in yet*/}
    {!movie ? (
      <p>Loading...</p>
    ) : (
      <>
      
      <div className="Movie-Details">
  <img className="Movie-Image" src={movie.image}/>

  {/*  WRAPPER */}
  <div className="Movie-Info">

    <p className="Movie-Title"><strong>Title:</strong> {movie.title}</p>
    <p className="Movie-Description"><strong>Description:</strong> {movie.description}</p>
    <p className="Movie-Director"><strong>Director:</strong> {movie.director}</p>
    <p className="Movie-Release"><strong>Release Year:</strong> {movie.releaseYear}</p>
    <p className="Movie-Duration"><strong>Duration:</strong> {movie.duration}</p>
    <p className="Movie-Rating"><strong>Rating:</strong> {ratings.find(r => r.id === movie?.ratingId)?.name}</p>
    <p className="Movie-Genre"><strong>Genre:</strong> {genres.find(g => g.id === movie?.genreId)?.name}</p>   
    <p className="Published-Reviews"><strong>Published Critic Reviews:</strong> {reviews.filter(r => r.isPublished).length}</p>    

    <br />

    <p className="Published-Display-text"><strong>Published Reviews Down Here:</strong></p>

    {reviews.filter(r => r.isPublished).map(r => (
      <div className="Review-Cards" key={r.id}>
        <p className="Review-Name"><strong>Name:</strong> {r.createdBy}</p>
        <p className="Review-Said"><strong>Said:</strong> {r.content}</p>
        <p className="Review-Rating-Given"><strong>Rating:</strong> {r.rating}</p>
      </div>
    ))}

  </div>
</div>




      <Link to="/">
        <button className="Go-Back-Button">Go Back</button>
      </Link>
      </>
      
    )}











      
    </>





    
  )
  }



export default Details