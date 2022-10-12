import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Slider.css"
import image from "../Images/thum_privas-6.jpg"
import { Link } from "react-router-dom";

function Slider({classe}) {
  

  const data1 =[
    {
      id: 1,
      image: `${image}`,
      title: "lol",
      text: "blabla",
    },
    {
      id: 2,
      image: `${image}`,
      title: "test2",
      text: "bonjour je suis la salut c'est moi coucou heho",
    }, {
      id: 3,
      image: `${image}`,
      title: "test3",
      text: "blabla",
    }
  ]

  const data2 = [
    {
      id: 1,
      image: `${image}`,
      title: "test",
      text: "blabla",
    },
    {
      id: 2,
      image: `${image}`,
      title: "test2",
      text: "bonjour je suis la salut c'est moi coucou heho",
    }, {
      id: 3,
      image: `${image}`,
      title: "test3",
      text: "blabla",
    }
  ]

  let datas;
  
  if(classe === "first"){
    datas =data1;
  }else{
    datas = data2;
  }

  return (
    <Carousel autoPlay interval={6000} infiniteLoop>
      {datas.map(slide => (
        <div key={slide.id}>
          <img src={slide.image} alt="" />
          <div className="overlay">
            <h2 className="overlay_title">{slide.title}</h2>
            <p className="overlay_text">{slide.text}</p>
            <Link to="/Travaux">Lire la suite</Link>
          </div>
        </div>
      ))}
    </Carousel>

  );
}

export default Slider;