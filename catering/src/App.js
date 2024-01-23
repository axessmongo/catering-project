import './assets/css/home.css'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Component/Home';
import { useEffect } from 'react';

import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({
      
    });
  }, []); 
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
