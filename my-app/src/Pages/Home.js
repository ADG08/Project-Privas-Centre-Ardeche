import RapidButton from "../Components/RapidButton";
import BackgroundImageTop from "../Images/thum_privas-6.jpg"
import "./Home.css"

function Home() {
  return (
    <div>
      <img className="img" src={BackgroundImageTop} alt=""></img>
      <RapidButton></RapidButton>
    </div>
  );
}

export default Home;
