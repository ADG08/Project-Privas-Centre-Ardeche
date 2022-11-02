import "./DecouvrirPrivas.css"
import RapidButton from "../Components/RapidButton.js"
import BackgroundImageTopDec from "../Images/Decouvrir-Privas/privas.PNG"
import Titre_dec from "../Images/Decouvrir-Privas/encadre.png"
import Communes_img from "../Images/Decouvrir-Privas/privas_communes.png"
import tourisme_img from "../Images/Decouvrir-Privas/tourrisme.png"
import territoire_img from "../Images/Decouvrir-Privas/cerisier.png"
import "./DecouvrirPrivas.js"

function Decouvrir_Privas() {
  return (
    <div>
      <div className="divimgtitre_dec">
        <img className="imgtitredec" src={Titre_dec} alt=""></img>
      </div>
      <img className="imgdec" src={BackgroundImageTopDec} alt=""></img>
      <div className="divdec">
        <h1 className="dec">Découvrir Privas</h1> 
      </div>
      <div className="ButtonDivDec">
        <RapidButton image={tourisme_img} text ="Tourisme" to="/environnement" />
        <RapidButton image={Communes_img} text="Communes" to="/environnement" />
        <RapidButton image={territoire_img} text="Un territoire à forte identité " to="/environnement" />
      </div>
      <h1>LA</h1>
    </div>
  );
}

export default Decouvrir_Privas;