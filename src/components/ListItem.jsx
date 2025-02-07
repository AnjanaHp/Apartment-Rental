import listings from "../data/listings.json";
import { useState } from "react";
import './ListItem.css'
import { Link } from 'react-router-dom';




function ListItem() {
  
   

  return (
    <div className="home">
    
      
      {listingToDisplay.map((listing) => {
        return (
          <div key={listing.id} className="card">
            <h2> {listing.name} </h2>
            <img className="pic"  src={listing.picture_url} alt="listing image" />
            <p><b>{listing.host_location} </b></p>
            <p>Superhost: {listing.host_is_superhost ? 'Yes' : 'No'}</p>
            <button onClick={() => deleteListing(listing.id)}> Delete this listing 🗑️</button>

            <Link to={`/listing/${listing.id}`} >
            <button>More details</button> 
            </Link>

        
          </div>
        );
      })}
      
    </div>
  );
}

export default ListItem;
