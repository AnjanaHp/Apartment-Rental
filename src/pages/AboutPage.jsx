import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


function AboutPage () {

 return(
<>
<Navbar/>
<Sidebar/>
<h1 className="title"> Luxe Living : Your Perfect Getaway Awaits </h1>
<div className="content">
<p>
Welcome to Luxe Living, designed to provide travelers with easy access to a variety of holiday homes and hotel accommodations. 
Our platform brings together the best vacation properties, from cozy cottages to luxurious hotels, 
ensuring that everyone can find the perfect place to stay for their next trip.
 Whether you're looking for a relaxing retreat or a vibrant city experience, we have got you covered.
</p>

</div>
<div className="project">
<h2>Project Overview </h2>
<p>
Our goal is to make booking holiday homes and hotels as simple and enjoyable as possible. 
We have created a user-friendly platform where users can browse, compare, and book their dream accommodations with just a few clicks.       
The platform includes detailed property listings, high-quality images, and reviews to help customers make well-informed decisions.
</p>
</div>
<h2> Meet the team:-</h2>

<div>
    <p> <b> Anjana Hariprasad:  </b>  Github <Link to ="https://github.com/AnjanaHp"></Link> </p>
</div>

<div>
    <p> <b> George Lam:  </b> Github 
    <Link to="https://github.com/Fantastic-George"></Link></p>
</div>

</>

    )
}
export default AboutPage;