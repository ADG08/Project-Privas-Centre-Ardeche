import RapidButton from "../Components/RapidButton"
import BackgroundImageTop from "../Images/thum_privas-6.jpg"
import test from "../Images/Home/IMG_4495.jpg"
import "./Home.css"
import Slider from "../Components/Slider.js"

function Home() {
  return (
    <div>
      <img className="img" src={BackgroundImageTop} alt=""></img>
      <h1 className="ButtonTitle">Notre Communauté</h1>
      <div className="ButtonDiv">
        <RapidButton image={test} text="Présentation" to="/environnement" />
        <RapidButton image={test} text="Fonctionnement" to="/environnement" />
        <RapidButton image={test} text="Compétences" to="/environnement" />
        <RapidButton image={test} text="Communes" to="/environnement" />
        <RapidButton image={test} text="Territoire" to="/environnement" />
        <RapidButton image={test} text="Contact" to="/environnement" />
      </div>
      <div className="firstCarousel">
        <h1>Les Actus</h1>
        <Slider classe="first"/>
      </div>
      <Slider classe="second" />
      
    </div>
  );
}



export default Home;
