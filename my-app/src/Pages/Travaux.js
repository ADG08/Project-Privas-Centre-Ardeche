import "./Travaux.css"
import imageTravaux from "../Images/Travaux/Panneau.png"

function Travaux(){
    return(
        <div className="Trv">
            <h1>Travaux en cours</h1>
            <img src={imageTravaux} alt=""></img>
            <div className="rec">
                <div className="content"></div>
            </div>
        </div>
    );
}

export default Travaux;