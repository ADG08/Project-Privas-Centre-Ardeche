import "./rapidButton.css"
import { Link } from "react-router-dom";

function rapidButton({ image, text, to }) {
    return (
        <div className="cercle">
            <div className="items">
                <p>{text}</p>
                <Link to={to}><img src={image} alt=""></img></Link>
            </div>
        </div>
    );
}

export default rapidButton;