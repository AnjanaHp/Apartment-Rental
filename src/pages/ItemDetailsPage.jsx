import { useParams } from 'react-router-dom';
import './ItemDetailsPage.css';


function ItemDetailsPage(props) {
    const { id } = useParams();  

    console.log('Props:', props);
    
    console.log('....................')
    const currentListing = props.listings.find(item => item.id === parseInt(id));
    console.log(currentListing);
    if (!props.listings) {
        return <div>Listing not found!</div>;
    }

    return (
        <div className="listing-container">
            <h1 className='listing-header'>{currentListing.name}</h1>
            <div className='image-container'>
            <img 
                src={currentListing.picture_url} 
                alt={currentListing.name} 
                className='listing-image'
            />
            </div>
            <div className='listing-detail'>
            <p>{currentListing.description}</p>
            <p className='location-badge'> <b>Location </b> {currentListing.host_location}</p>
            <p> <b> Price:</b> {currentListing.price}</p>
            <p> <b> Review rating:  </b> {currentListing.review_scores_rating}</p>
            
            <p>Superhost: {currentListing.host_is_superhost ? 'Yes' : 'No'}</p>
            <p> <b>Type of property: </b> {currentListing.property_type}</p>
            <p className='facilities'> <b> Amenities: </b> {currentListing.amenities} </p>
            </div>
        </div>
    );
}

export default ItemDetailsPage;