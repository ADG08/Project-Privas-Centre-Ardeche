import "./DecouvrirPrivas.css"
import BackgroundImageTopDec from "../Images/Decouvrir-Privas/privas.PNG"
import Titre_dec from "../Images/Decouvrir-Privas/titres.jpg"

function Decouvrir_Privas() {
  return (
    <div>
      <div  className="divimgtitre_dec">
        <img className="imgtitredec" src={Titre_dec} alt=""></img>
      </div>
      <img className="imgdec" src={BackgroundImageTopDec} alt=""></img>
      <div className="divdec">
        <h1 className="dec">Découvrir Privas</h1> 
      </div>
    </div>
  );
}
export default Decouvrir_Privas;