import React, { useEffect, useState } from "react";


function App() {
  const [data, setData] = useState([]); //set empty array for data
  const [error, setError] = useState(null); //set error state to null for error handling
  const API_URL ="https://localhost:7195/api/movies"; //gets api url  

useEffect(() => { //runs when component loads

  const fetchData = async () => {

    try {
      const response = await fetch(API_URL);

      if (!response.ok) { //if response is not ok, throw error
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result); //set data to result

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


</div>

    </>
  )

}

export default App
