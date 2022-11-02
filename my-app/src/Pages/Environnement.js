import "./Environnement.css"
import RapidButton from "../Components/RapidButton.js"
import Titre_env from "../Images/Environnement/encadre.png"
import Energie_img from "../Images/Environnement/Energie.jpg"
import Eau_img from "../Images/Environnement/eau.png"
import dechets_img from "../Images/Environnement/tri_selectif.png"
import imgPresentationEnv from "../Images/Environnement/vue-de-privas-et-du-petit.jpg"
import tri from "../Images/Environnement/tri_selec.png"
import solaire from "../Images/Environnement/solaire.png"
import riviere from "../Images/Environnement/riviere.png"
import potable from "../Images/Environnement/potable.png"

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

      <div className="deuxiemePartEnv">
        <div className="lignesV1Env"></div>
        <div className="banniereEnv">
          <div className="paragrapheEnv"><p>La Communauté d’Agglomération Privas Centre Ardèche est engagée,
            avec ses partenaires, dans des actions de sensibilisation, de conseil ou de contrôle,
            permettant de préserver l’environnement.</p>
          </div>
          <img src={imgPresentationEnv} alt="" className="imgPresentationEnv"></img>
        </div>
        <div className="lignesV1Env"></div>
      </div>

      <div className="pausePartEnv"></div>

      <div className="troisiemePartEnv">
        <div className="TroisTitre">
          <h1 className="ButtonTitleEnv">Liens rapides</h1>
        </div>
        <div className="ButtonDivEnv">
          <RapidButton image={tri} text="Tri sélectif" to="/Travaux" /> 
          <RapidButton image={solaire} text="Energie positive" to="/Travaux" />
          <RapidButton image={riviere} text="Les rivières" to="/Travaux" />
          <RapidButton image={potable} text="Eau potable" to="/Travaux" />
        </div>
      </div>
    </div>
  );
}
export default Environnement;