import "./Environnement.css"
import RapidButton from "../Components/RapidButton.js"
import Titre_env from "../Images/Environnement/encadre.png"
import Energie_img from "../Images/Environnement/Energie.jpg"
import Eau_img from "../Images/Environnement/eau.png"
import dechets_img from "../Images/Environnement/tri_selectif.png"

function Environnement() {
  return (
    <div className="environnement">
      <div className="first_part">
        <img className="imgtitrenv" src={Titre_env} alt=""></img>
        <div className="titrenv">
          <h1 className="env">Environnement</h1>
        </div>
        <div className="ButtonDivEnv">
          <RapidButton image={Energie_img} text="Energie" to="/Travaux" />
          <RapidButton image={Eau_img} text="Eau" to="/Travaux" />
          <RapidButton image={dechets_img} text="Déchets ménagers" to="/Travaux" />
        </div>
      </div>

    </div>
  );
}
export default Environnement;