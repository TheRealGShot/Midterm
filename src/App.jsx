import './App.css'
import Navbar from './components/Navbar.jsx';
import Mission from './components/Mission.jsx';
import TOTM from './components/TOTM.jsx';
import Locations from './components/Locations.jsx';

import Footer from './components/Footer.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Mission/>}/>
          <Route path="/totm" element={<TOTM/>}/>
          <Route path="/locations" element={<Locations/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
