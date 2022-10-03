import image from "../Images/logo.jpg"
import './NavBar.css';

function NavBar() {
    return(
        <div>
            <img className="logo" src={image} alt="" ></img>
            <h1 className="actus" href="Test">Les Actus</h1>
            <h1 className="eco" href="Test">Économie</h1>
            <h1 className="vivre" href="Test">Vivre a Privas</h1>
            <h1 className="dec" href="Test">Decouvrir Privas</h1>
            <h1 className="env" href="Test">Environnement</h1>
            <h1 className="cult" href="Test">Culture</h1>
        </div>
    )
}

export default NavBar;