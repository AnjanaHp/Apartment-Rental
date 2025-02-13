import { useParams, useNavigate, Link } from 'react-router-dom';
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

                <div className="info-item">
                    <label> <b> Location: </b>
                        {currentListing.host_location ? currentListing.host_location : 'Contact host '} </label>

                    <label> <b> Price: </b>
                        {currentListing.price}</label>

                    <label> <b> Rating: </b>
                        {currentListing.review_scores_rating}</label>

                    <label> <b> Superhost:  </b>
                        {currentListing.host_is_superhost ? 'Yes' : 'No'}</label>

                    <label> <b> Property Type:  </b>
                        {currentListing.property_type}</label>
                </div>
            </div>
            <div className="amenities-section">
                <h3>Amenities</h3>
                <ul className="facilities">
                    {currentListing.amenities.map((amenity, index) => (
                        <li key={index}>{amenity}</li>
                    ))}
                </ul>

            </div>
            <div className='update'>
            {<Link to ={`/update/${id}`}>
                <button >  Update Listing  </button>    </Link> }
                </div>
        </div>
    );
}

export default ItemDetailsPage;