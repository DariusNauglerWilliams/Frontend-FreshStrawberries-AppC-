import DisplayMovies from "./DisplayMovies";
import Details from "./Details";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";







function App() {
  return (

<>
    <Navbar>

    </Navbar>
    <Routes>
      <Route path="/" element={<DisplayMovies />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
</>

  )

}

export default App
