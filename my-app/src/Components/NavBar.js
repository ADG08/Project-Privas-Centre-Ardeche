import logo from "../Images/logo.jpg";
import search from "../Images/Search_Noun_project_15028.png"
import "./NavBar.css";
import { BrowserRouter, Route, Link } from "react-router-dom";


function NavBar() {
  return (
    <div className="Navbar">
      <div className="leftSide">
        <Link to="/"><img src={logo} alt="" className="logo"></img></Link>
      </div>
      <div className="middle">
        <div className="links">
          <Link to="/Actus">Les Actus</Link>
          <Link to="/Economie">Économie</Link>
          <Link to="/Vivre-a-Privas">Vivre a Privas</Link>
          <Link to="/Decouvrir-Privas">Decouvrir Privas</Link>
          <Link to="/Environnement">Environnement</Link>
          <Link to="/Culture">Culture</Link>
        </div>
      </div>
      <div className="rightSide">
        <input className="txt" type="text" placeholder="Search..." />
        <input className="searchButton" type="image" src={search} alt="" />
      </div>
    </div>
  );
}

export default NavBar;
