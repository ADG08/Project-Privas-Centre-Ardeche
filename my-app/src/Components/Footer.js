import "./Footer.css"
import test from "../Images/Home/IMG_4495.jpg"
import RapidButton from "./RapidButton";

function Footer(){
    return(
        <div className="Footer">
            <div className="Contact">
                <h1>Contact</h1>
                <p>Privas-centre-ardeche</p>
                <p>1 Rue Serre du Serret 07000 Privas</p>
            </div>

            <div className="Map">

            </div>
            <RapidButton image={test} text="ouais" to="/environnement" />
            <RapidButton image={test} text="ouais" to="/environnement" />
            <RapidButton image={test} text="ouais" to="/environnement" />
            <div className="Liens">
                <h1>Autres Liens</h1>
            </div>
        </div>
    );
}

export default Footer;