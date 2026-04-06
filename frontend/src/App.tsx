import React, { useEffect, useState } from "react";


function App() {
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


    
      const reviewResult = await reviewResponse.json();
      setReviews(reviewResult); //set reviews to review result
      



    } catch (err) {
      setError(err.message); //set error to error message
    }

    

  };fetchData(); //call fetch data function

}, []);




  return (
    <>
    <div className="MovieList">
      <h1>Movie List</h1>

    {/*If error first display it */}
    {error && <p>{error}</p>}

    {/* Else If no error, display data */}
    {data.map((movie) => (
      <div key={movie.id}>
        <h2>{movie.title}</h2>
        <img src={movie.image} width="200" />
        
      </div>
    ))}

    {reviews.map((review) => (
      <p key={review.id}>{review.createdBy}</p>
    ))}


</div>

    </>
  )

}

export default App
