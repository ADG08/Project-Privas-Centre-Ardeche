import logo from "../Images/logo.jpg";
import search from "../Images/Search_Noun_project_15028.png"
import "./NavBar.css";

function NavBar() {
  return (
    <div className="Navbar">
        <div className="leftSide">
            <a href="./"><img src={logo} alt="" className="logo"></img></a>
        </div>
      <div className="middle">
        <div className="links">
          <a href="Actus">Les Actus</a>
          <a href="Economie">Économie</a>
          <a href="Vivre-a-Privas">Vivre a Privas</a>
          <a href="Decouvrir-Privas">Decouvrir Privas</a>
          <a href="Environnement">Environnement</a>
          <a href="Culture">Culture</a>
        </div>
      </div>
      <div className="rightSide">
        <input className="txt" type="text" placeholder="Search..." />
        <input className="searchButton" type="image" src={search} alt=""/>
      </div>
    </div>
  );
}

export default NavBar;
