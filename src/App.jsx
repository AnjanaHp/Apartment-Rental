import {  useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import listingsData from './data/listings.json';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import DashboardPage from './pages/DashboardPage';
import ItemDetailsPage from './pages/ItemDetailsPage';
import AboutPage from './pages/AboutPage';
import EditingForm from './components/EditingForm';
import Footer from './components/Footer';




function App() {
    let [listings, setListings] = useState(listingsData);
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
                <Route path="/listing/:id" element={<ItemDetailsPage listings={listings}/>} />
                <Route path="/about" element={<AboutPage />} />
                <Route path ="/update/:id" element={<EditingForm listing={listings} onSubmit={handleUpdateListing}  />} />
                <Route path="*" element={<p>Page not found</p>} />
            </Routes>
        </div>
        <Footer />
    </>
    );
}

export default App;