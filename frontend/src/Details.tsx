
import { Link, useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  return (
    <>


      <h2>Movie Details: {id}</h2>
      <Link to="/">
        <button>Go Back</button>
      </Link>

















      
    </>





    
  )
  }



export default Details