import "./DecouvrirPrivas.css"
import RapidButton from "../Components/RapidButton.js"
import Titre_dec from "../Images/Decouvrir-Privas/encadre.png"
import Communes_img from "../Images/Decouvrir-Privas/communes.png"
import tourisme_img from "../Images/Decouvrir-Privas/tourrisme.png"
import territoire_img from "../Images/Decouvrir-Privas/cerisier.png"
import imgPresentationdec from "../Images/Decouvrir-Privas/decouvri.jpg"
import office from "../Images/Decouvrir-Privas/agence_tourrisme.png"
import vernoux from "../Images/Decouvrir-Privas/vernoux.png"
import rando from "../Images/Decouvrir-Privas/randonnées.png"
import passe from "../Images/Decouvrir-Privas/dupasse.png"
import "./DecouvrirPrivas.js"

function Decouvrir_Privas() {
  return (
    <div className="privas">
      <div className="first_partdec">
        <img className="imgtitredec" src={Titre_dec} alt=""></img>
        <div className="titredec">
          <h1 className="dec">Découvrir Privas</h1>
        </div>
        <div className="ButtonDivDec">
          <RapidButton image={tourisme_img} text="Tourrisme" to="/Travaux" />
          <RapidButton image={Communes_img} text="Communes" to="/Travaux" />
          <RapidButton image={territoire_img} text="Un territoire à forte identité" to="/Travaux" />
        </div>
      </div>

      <div className="deuxiemePartdec">
        <div className="lignesV1dec"></div>
        <div className="bannieredec">
          <div className="paragraphedec"><p>La Communauté d’Agglomération Privas Centre Ardèche est engagée, 
            avec ses partenaires, dans le développement des activités liées au tourisme. A proximité de la 
            caverne ornée du Pont d’Arc, inscrite au patrimoine mondial de l’UNESCO, des milliers de visiteurs 
            découvrent chaque année les 42 villes et villages de la Communauté d’Agglomération 
            Privas Centre Ardèche.</p>
          </div>
          <img src={imgPresentationdec} alt="" className="imgPresentationdec"></img>
        </div>
        <div className="lignesV1dec"></div>
      </div>

      <div className="pausePartdec"></div>

      <div className="troisiemePartdec">
          <h1 className="ButtonTitledec">Liens rapides</h1>
        <div className="ButtonDivdec">
          <RapidButton image={office} text="Office de tourrisme" to="/Travaux" /> 
          <RapidButton image={vernoux} text="Plateaux du Vernoux" to="/Travaux" />
          <RapidButton image={rando} text="Chemins de randonnées" to="/Travaux" />
          <RapidButton image={passe} text="Du passé au présent" to="/Travaux" />
        </div>
      </div>
    </div>
  );
}
export default Decouvrir_Privas;