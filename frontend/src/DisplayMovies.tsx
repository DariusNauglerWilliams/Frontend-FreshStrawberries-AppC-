import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DisplayMovies() {
  const [data, setData] = useState([]); //set empty array for data
  const [error, setError] = useState(null); //set error state to null for error handling
  const API_URL ="https://localhost:7195/api/movies"; //gets api url  
const [reviews, setReviews] = useState([]);
const REV_API_URL = "https://localhost:7195/api/reviews/"; //gets review api url, needs movie id to get reviews for specific movie



useEffect(() => { //runs when component loads

  const fetchData = async () => {

    try {
      const response = await fetch(API_URL);
       const reviewResponse = await fetch(REV_API_URL); //fetch reviews

      if (!response.ok) { //if response is not ok, throw error
        throw new Error(`HTTP error! status: ${response.status}`);
      }


      const result = await response.json();
      setData(result); //set data to result


    
      const reviewResult = reviewResponse.ok ? await reviewResponse.json() : [];
      setReviews(reviewResult); //set reviews to review result
      



    } catch (err) {
      setError(err.message); //set error to error message
    }

    

  };fetchData(); //call fetch data function

}, []);




  return (
    <>
     
    <div className="MovieList-cards">
     
   <h1 className="text-top">Current List Of Movies</h1>
    {/*If error first display it */}
    {error && <p>{error}</p>}

    {/* Else If no error, display data */}
    {data.map((movie) => (
      <div key={movie.id}>
        <h2 className="Title-Movie">{movie.title}</h2>
        <img className="Image-Display" src={movie.image} width="360" />
        <br></br>

<Link to={`/details/${movie.id}`}>
  <button className="Details-Button-Go">Click here to see more</button>
</Link>

       

       <p className="Critic-Score-Text">
        Average Critic Score: {(() => {
          //get total movie reviews 
          const reviewsFilter = reviews.filter((review) => review.movieId === movie.id);

          // 2. check if none
          if (reviewsFilter.length === 0){
            return "No Reviews Made";
          }

          // 3. calculate total
          const reviewsTotal = reviewsFilter.reduce((sum, review) => sum + review.rating , 0);

          // 4. calculate average
          const averageReview = reviewsTotal / reviewsFilter.length
           
          

          // 5. return result
          return averageReview.toFixed(0);

        })()} Out of 5
     <br></br>
     <br></br>
     
        
       
        
        
        </p> 

        
      </div>
    ))}

   

</div>

    </>
  )

}

export default DisplayMovies
