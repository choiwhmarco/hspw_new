import React from 'react';
import './App.css';
import Navbar from './components/index';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import Download from './pages/download';
import Analysis_Home from './pages/analysis_home';
import Gene from './pages/gene';
import Contact from './pages/contact';
  
function App() {
  
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/download' element={<Download/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/analysis_home' element={<Analysis_Home/>} />
        <Route path='/gene' element={<Gene/>} />
    </Routes>
    </Router>
);
}
  
export default App;