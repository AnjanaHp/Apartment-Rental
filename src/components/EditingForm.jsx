import { useState } from 'react';
import './Form.css';
import {  useNavigate, useParams } from 'react-router-dom';


function EditingForm({ listing, onSubmit }) {
    const { id } = useParams();
    const currentListing = listing.find(item => item.id === parseInt(id));
    const [name, setName] = useState(currentListing.name);
    const [city, setCity] = useState(currentListing.host_location);
    const [price, setPrice] = useState(currentListing.price);
    const [description, setDescription] = useState(currentListing.description);
    const [imageURL, setImageURL] = useState(currentListing.picture_url);
    const [amenities, setAmenities] = useState(currentListing.amenities);
    const navigate = useNavigate();



    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedListing = {
            ...currentListing,
            name: name,
            host_location: city,
            price: price,
            picture_url: imageURL,
            description: description,
            amenities: amenities
        };
        onSubmit(updatedListing);
        navigate(`/listing/${id}`);
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
                    type="text"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                   

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
