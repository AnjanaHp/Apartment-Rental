import { useState } from 'react';
import './Form.css';

function EditingForm({ listing, onSubmit }) {
    const [name, setName] = useState(listing.name);
    const [city, setCity] = useState(listing.host_location);
    const [price, setPrice] = useState(listing.price);
    const [description, setDescription] = useState(listing.description);
    const [imageURL, setImageURL] = useState(listing.picture_url);
    const [amenities, setAmenities] = useState(listing.amenities);

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedListing = {
            ...listing,
            name: name,
            host_location: city,
            price: Number(price),
            picture_url: imageURL,
            description: description,
            amenities: amenities
        };
        
        onSubmit(updatedListing);
    }

    return (
        <div className="form-container">
            <h1>Edit Listing</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    
                />
                <input 
                    type="text" 
                    placeholder="City" 
                    value={city} 
                    onChange={(e) => setCity(e.target.value)} 
                    
                />
                <input 
                    type="number" 
                    placeholder="Price" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)}
                    min="100"
                    max="10000"
                    
                />
                <input 
                    type="url" 
                    placeholder="Image URL" 
                    value={imageURL} 
                    onChange={(e) => setImageURL(e.target.value)}
                    
                />
                <input 
                    type="text" 
                    placeholder="Amenities" 
                    value={amenities} 
                    onChange={(e) => setAmenities(e.target.value)}
                    
                />
                <input 
                    type="text" 
                    placeholder="Description" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}
                    
                />
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
}

export default EditingForm;
