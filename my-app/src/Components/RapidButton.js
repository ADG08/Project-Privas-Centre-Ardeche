import "./rapidButton.css"
import { Link } from "react-router-dom";

function rapidButton(props) {
    const image = props.image;
    const text = props.text;
    const to = props.to;
    return (
        <div className="cercle">
            <img src={image} alt=""></img>
            <Link to={to}>{text}</Link>
        </div>
    );
}

export default rapidButton;