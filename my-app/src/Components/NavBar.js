import logo from "../Images/NavBar/logo.jpg";
import search from "../Images/NavBar/Search_Noun_project_15028.png"
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import ReorderIcon from "@material-ui/icons/Reorder"
import CloseIcon from '@material-ui/icons/Close';



function NavBar() {
  const [showLinks,setShowLinks] = useState(false);
  
  let icon = <ReorderIcon/>
  if (!showLinks){
    icon = <ReorderIcon/>
  }
  else{
    icon = <CloseIcon/>
  }
  return (
    <div className="Navbar">

      <button onClick={() => setShowLinks(!showLinks)}>
        {" "}
        {icon}
      </button>
      <div className="leftSide">
        <Link to="/"><img src={logo} alt="" className="logo"></img></Link>
      </div>
      
      <div className="middle" id={showLinks ? "hidden" : ""}>
        <div className="links">
          <Link to="/Actus">Les Actus</Link>
          <Link to="/Economie">Économie</Link>
          <Link to="/Vivre-a-Privas">Vivre a Privas</Link>
          <Link to="/Decouvrir-Privas">Decouvrir Privas</Link>
          <Link to="/Environnement">Environnement</Link>
          <Link to="/Culture">Culture</Link>
        </div>
      </div>
      <div className="rightSide" id={showLinks ? "hiddenSearch" : ""}>
        <input className="txt" type="text" placeholder="Search..." />
        <input className="searchButton" type="image" src={search} alt="" /> 
      </div>
    </div>
  );
}

export default NavBar;
