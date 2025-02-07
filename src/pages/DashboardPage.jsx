import ListItem from "../components/ListItem";
import Form from "../components/Form";
import listings from '../data/listings.json';
import { useState, useCallback } from "react";

function DashboardPage() { 
    const [listingsToDisplay, setListingsToDisplay] = useState(listings);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const deleteListing = useCallback((id) => {
        setIsLoading(true);
        setError(null);
        try {
            const updatedListings = listingsToDisplay.filter((listing) => listing.id !== id);
            setListingsToDisplay(updatedListings);
        } catch (error) {
            console.error('Error deleting listing:', error);
            setError('Failed to delete listing. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }, [listingsToDisplay]);
    
    const createListing = useCallback((listingDetails) => {
        setIsLoading(true);
        setError(null);
        try {
            const newId = Math.max(...listingsToDisplay.map((list) => list.id), 0) + 1;
            
            const newList = {
                ...listingDetails,
                id: newId
            };

            setListingsToDisplay(prevListings => [newList, ...prevListings]);
        } catch (error) {
            console.error('Error creating listing:', error);
            setError('Failed to create listing. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }, [listingsToDisplay]);
    
    if (isLoading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="dashboard-container">
            <Form callbackToCreate={createListing}/>
            <ListItem listings={listingsToDisplay} onDelete={deleteListing} />
        </div>
    );
}

export default DashboardPage; 
