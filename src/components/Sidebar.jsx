import DashboardPage from "../pages/DashboardPage";
import AboutPage from "../pages/AboutPage";
import { Link } from "react-router-dom";


function Sidebar() {
   
    return (
    <div className="side">
        <button> Home  </button>
        <button> About us  </button>
        
     {/*<Link to="/"> {Home} </Link> 
     <Link to="/about"> {About} </Link>  */}
    </div>
    )
}

export default Sidebar;