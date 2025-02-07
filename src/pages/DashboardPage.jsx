import Footer from "../components/Footer";
import ListItem from "../components/ListItem";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Form from "../components/Form";




   
function DashboardPage() {

    const [listingToDisplay, setListingToDisplay] = useState(listings);

    const deleteListing = (id) => {
      console.log(`Deleting listing with id: ${id}`);
  
      const updatedListings = listingToDisplay.filter((listing) => listing.id !== id);
      setListingToDisplay(updatedListings);
    };
    
    const createListing = (id) => {

    };

    return (
        <>
         <Form />
            <ListItem />
           
        </>
    );
}

export default DashboardPage;