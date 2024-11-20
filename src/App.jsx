import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import FittingPage from './pages/FittingPage';
import AppointmentsPage from './pages/AppointmentsPage';
import ContactPage from './pages/ContactPage';
//import './App.css';

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/à-propos' element={<AboutPage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/produits' element={<ProductsPage />} />
          <Route path='/essayage' element={<FittingPage />} />
          <Route path='/rendez-vous' element={<AppointmentsPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
