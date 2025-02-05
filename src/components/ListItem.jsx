import listings from "../data/listings.json";
import { useState } from "react";
import './ListItem.css'



function List() {
  
    const [listingToDisplay, setListingToDisplay] = useState(listings);

  const deleteListing = (id) => {
    console.log(`Deleting listing with id: ${id}`);

    const updatedListings = listingToDisplay.filter((listing) => listing.id !== id);
    setListingToDisplay(updatedListings);
  };
  

  return (
    <div className="home">
    
      
      {listingToDisplay.map((listing) => {
        return (
          <div key={listing.id} className="card">
            <h2> {listing.name} </h2>
            <img className="pic"  src={listing.picture_url} alt="listing image" />
            <p>{listing.host_location}</p>
            <p>Is superhost: {listing.host_is_superhost ? 'True' : 'False'}</p>
            <button onClick={() => deleteListing(listing.id)}> Delete this listing 🗑️</button>
          </div>
        );
      })}
      
    </div>
  );
}

export default List;
