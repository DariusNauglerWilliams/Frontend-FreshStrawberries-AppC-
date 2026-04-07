import DisplayMovies from "./DisplayMovies";
import Details from "./Details";
import { Route, Routes } from "react-router-dom";









function App() {
  return (
    <Routes>
      <Route path="/" element={<DisplayMovies />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>


  )

}

export default App
