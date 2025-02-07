import DashboardPage from "../pages/DashboardPage";
import AboutPage from "../pages/AboutPage";
import { Link } from "react-router-dom";


function Sidebar() {
   
    return (
    <div className="side">
       { <Link to ="/">
        <button>  Home  </button>    </Link> }
       {<Link to ="/about">
        <button>  About us  </button> </Link> } 
        
     {/*<Link to="/"> {Home} </Link> 
     <Link to="/about"> {About} </Link>  */}
    </div>
    )
}

export default Sidebar;