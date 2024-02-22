import "./assets/css/home.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useEffect } from "react";

import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos";
import Menu from "./Component/Menu";
import Banner from "./Component/Banner";
import Gallery from "./Component/Gallery";

function App() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Banner />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/gallery" element={<Gallery/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
