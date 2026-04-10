import DisplayMovies from "./DisplayMovies";
import Details from "./Details";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
  const { pathname } = useLocation();
  return (
    <>
      {pathname === "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<DisplayMovies />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App
