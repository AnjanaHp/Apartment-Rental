import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './ItemDetailsPage.css';

function ItemDetailsPage({ listings }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [imageError, setImageError] = useState(false);

    if (!listings || listings.length === 0) {
        return (
            <div className="error-container">
                <h2>Error loading listings</h2>
                <button onClick={() => navigate('/dashboard')}>Return to Dashboard</button>
            </div>
        );
    }

    const currentListing = listings.find(item => item.id === parseInt(id));

    if (!currentListing) {
        return (
            <div className="error-container">
                <h2>Listing not found!</h2>
                <button onClick={() => navigate('/dashboard')}>Return to Dashboard</button>
            </div>
        );
    }

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <div className="listing-container">
            <h1 className="listing-header">{currentListing.name}</h1>
            <div className="image-container">
                {!imageError ? (
                    <img 
                        src={currentListing.picture_url} 
                        alt={currentListing.name} 
                        className="listing-image"
                        onError={handleImageError}
                    />
                ) : (
                    <div className="image-fallback">Image not available</div>
                )}
            </div>
            <div className="listing-detail">
                <p className="description">{currentListing.description}</p>
                <div className="info-grid">
                    <div className="info-item">
                        <span className="label">Location:</span>
                        <span className="value">{currentListing.host_location}</span>
                    </div>
                    <div className="info-item">
                        <span className="label">Price:</span>
                        <span className="value">{currentListing.price}</span>
                    </div>
                    <div className="info-item">
                        <span className="label">Rating:</span>
                        <span className="value">{currentListing.review_scores_rating}</span>
                    </div>
                    <div className="info-item">
                        <span className="label">Superhost:</span>
                        <span className="value">{currentListing.host_is_superhost ? 'Yes' : 'No'}</span>
                    </div>
                    <div className="info-item">
                        <span className="label">Property Type:</span>
                        <span className="value">{currentListing.property_type}</span>
                    </div>
                </div>
                <div className="amenities-section">
                    <h3>Amenities</h3>
                    <p className="facilities">{currentListing.amenities}</p>
                </div>
            </div>
        </div>
    );
}

export default ItemDetailsPage;