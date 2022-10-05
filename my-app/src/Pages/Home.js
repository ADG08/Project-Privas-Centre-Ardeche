import RapidButton from "../Components/RapidButton";
import BackgroundImageTop from "../Images/thum_privas-6.jpg"
import test from "../Images/Home/IMG_4495.jpg"
import "./Home.css"

function Home() {
  return (
    <div>
      <img className="img" src={BackgroundImageTop} alt=""></img>
      <div className="ButtonDiv">
        <RapidButton image={test} text="ouais" to="/environnement" />
        <RapidButton image={test} text="ouais" to="/environnement" />
        <RapidButton image={test} text="ouais" to="/environnement" />
        <RapidButton image={test} text="ouais" to="/environnement" />
        <RapidButton image={test} text="ouais" to="/environnement" />
        <RapidButton image={test} text="ouais" to="/environnement" />
      </div>
    </div>
  );
}



export default Home;
