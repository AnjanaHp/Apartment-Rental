import { useState } from 'react';


function Form () {

    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [amenities, setAmenities] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        

        const listingDetails = {
            name: name,
            city: city,
            price: price,
            imgURL: imageURL,
            description: description,
            amenities: amenities.split(',').map(g => g.trim()) // Convert comma-separated string to array
        };
        
        props.callbackToCreate(listingDetails);
        
        // Clear form after submission
        setName('');
        setCity('');
        setImageURL('');
        setPrice('');
        setDescription('');
        setAmenities('');
    }

    return (
        <div>
            <h1>Add Listing</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required
                />

                    <input 
                    type="text" 
                    placeholder="City" 
                    value={city} 
                    onChange={(e) => setCity(e.target.value)} 
                    required
                />
                <input 
                    type="number" 
                    placeholder="Price" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)}
                    min="100"
                    max="10000"
                    required
                />
                <input 
                    type="url" 
                    placeholder="Image URL" 
                    value={imageURL} 
                    onChange={(e) => setImageURL(e.target.value)}
                    required
                />
                <input 
                    type="text" 
                    placeholder="Amenities (comma-separated)" 
                    value={amenities} 
                    onChange={(e) => setAmenities(e.target.value)}
                    required
                />

                    <input 
                    type="text" 
                    placeholder="Description" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <button type="submit">Add Listing</button>
            </form>
        </div>
    )
}

export default Form;

