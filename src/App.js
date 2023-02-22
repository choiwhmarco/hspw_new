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
import Footer from './components/footer.js';
import Signature from './pages/signature';
import Cluster from './pages/cluster'
import Gene_Detail from './pages/gene_detail';
import Salivary_Protein from './pages/salivary_protein';
import Protein_Detail from './pages/protein_detail';
import Analysis from './pages/analysis';
  
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
        <Route path='/protein_signature' element={<Signature/>} />
        <Route path='/protein_cluster' element={<Cluster/>} />
        <Route path='/gene_detail' element={<Gene_Detail />} />
        <Route path='/salivary_protein' element={<Salivary_Protein />} />
        <Route path='/protein_detail' element={<Protein_Detail />} />
        <Route path='/analysis' element={<Analysis/>} />
    </Routes>
    <Footer />
    </Router>
);
}
  
export default App;