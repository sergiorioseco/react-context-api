import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./views/Home.jsx";
import Favoritos from "./views/Favoritos.jsx";
import Context from "./contexts/Context.js";
import fotos from "./assets/fotos.json";
import NoFound from "./views/NoFound.jsx";

function App() {

  const [data, setData] = useState(fotos.photos)
  const sharedState = {data, setData}
  return (
    <div className="App">
      <Context.Provider value={sharedState}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="*" element={<NoFound />} />
        </Routes>
      </BrowserRouter>
      </Context.Provider>

    </div>
  )
}

export default App
