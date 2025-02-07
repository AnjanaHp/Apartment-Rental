import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DashboardPage from './pages/DashboardPage';
import ItemDetailsPage from './pages/ItemDetailsPage';
import AboutPage from './pages/AboutPage';
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import listings from './data/listings.json';




function App() {


  
  return (
    
    <>
    <Navbar />
    <div className="main-content">
      <Sidebar />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/listing/:id" element={<ItemDetailsPage listings={listings} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </div>
    <Footer />
  </>
);
}


export default App;