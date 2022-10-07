import "./Footer.css"
import test from "../Images/Home/IMG_4495.jpg"
import RapidButton from "./RapidButton";
import { Link } from "react-router-dom";
import GoogleApiWrapper from "./GoogleApiWrapper"

function Footer() {
    return (
        <div className="Footer">
            <div className="Contact">
                <h1>Contact</h1>
                <p>Privas-centre-ardeche</p>
                <p>1 Rue Serre du Serret 07000 Privas</p>
            </div>
            <div >
                <GoogleApiWrapper></GoogleApiWrapper>
            </div>
            <RapidButton image={test} text="ouais" to="/environnement" />
            <RapidButton image={test} text="ouais" to="/environnement" />
            <RapidButton image={test} text="ouais" to="/environnement" />
            <div className="Liens">
                <h1>Autres Liens</h1>

                <li><Link to="/Travaux">Nos offres d'emploi</Link></li>
                <li><Link to="/Travaux">Notre magazine</Link></li>
                <li><Link to="/Travaux">Notre magazine à la radio</Link></li>
                <li><Link to="/Travaux">Nos marchés publics</Link></li>
                <li><Link to="/Travaux">Nos actes administratifs</Link></li>
                <li><Link to="/Travaux">Nos autorisations d'occupation du domaine public et privé</Link></li>
                <li><Link to="/Travaux">En savoir plus</Link></li>
            </div>
        </div>

    );
}

export default Footer;