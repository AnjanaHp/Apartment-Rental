import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DashboardPage from './pages/DashboardPage';
import ItemDetailsPage from './pages/ItemDetailsPage';
import AboutPage from './pages/AboutPage';
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import listingsData from './data/listings.json';
import { useState } from 'react';

function App() {
    const [listings, setListings] = useState(listingsData);

    const handleUpdateListing = (updatedListing) => {
        setListings(prevListings => 
            prevListings.map(listing => 
                listing.id === updatedListing.id ? updatedListing : listing
            )
        );
    };

    return (
        <>
        <Navbar />
        <div className="main-content">
            <Sidebar />
            <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/listing/:id" element={<ItemDetailsPage listings={listings} onUpdateListing={handleUpdateListing} />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={<p>Page not found</p>} />
            </Routes>
        </div>
        <Footer />
    </>
    );
}

export default App;