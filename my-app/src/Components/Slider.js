import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Slider.css"
import image from "../Images/thum_privas-6.jpg"

function Slider() {
  const datas = [
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
      text: "blablablaebadqve",
    }, {
      id: 3,
      image: `${image}`,
      title: "test3",
      text: "blabla",
    }
  ]

  return (
    <Carousel autoPlay interval={6000} infiniteLoop>
      {datas.map(slide => (
        <div key={slide.id}>
          <img src={slide.image} alt="" />
          <div className="overlay">
            <h2 className="overlay_title">{slide.title}</h2>
            <p className="overlay_text">{slide.text}</p>
          </div>
        </div>
      ))}
    </Carousel>

  );
}

export default Slider;