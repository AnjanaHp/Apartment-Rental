import { Link } from "react-router-dom";


function Sidebar() {
   
    return (
    <div className="side">
       { <Link to ="/">
        <button>  Home  </button>    </Link> }
      {<Link to ="/about">
        <button>  About us  </button> </Link> } 
        
   
    </div>
    )
}

export default Sidebar;