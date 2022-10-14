import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Slider.css"
import image from "../Images/Home/thum_privas-6.jpg"
import journeeEuro from "../Images/Home/journeeEuro.png"
import projet from "../Images/Home/ImageProjet.jpg"
import ImageEau from "../Images/Home/ImageEau.png"
import ImageEnfant from "../Images/Home/Enfant.png"
import { Link } from "react-router-dom";

function Slider({classe}) {
  

  const data1 =[
    {
      id: 1,
      image: `${journeeEuro}`,
      title: "Journées Européennes du Patrimoine 2022",
      text: "Retrouvez le programme des Journées Européennes du Patrimoine qui se dérouleront le 17 et 18 septembre sur le territoire de la CAPCA.",
    },
    {
      id: 2,
      image: `${projet}`,
      title: 'Appel à projet " Travailler autrement" 2022',
      text: "Travailler autrement sur le territoire de la Communauté d’Agglomération Privas Centre Ardèche, c’est possible ! Pour accompagner l’émergence et le développement...",
    }, {
      id: 3,
      image: `${ImageEau}`,
      title: "Réduisez votre consommation d’eau sans changer vos habitudes",
      text: "En 2021, la Communauté d’Agglomération Privas Centre Ardèche vous proposait différents moyens de réduire votre consommation d’eau.",
    }
  ]

  const data2 = [
    {
      id: 1,
      image: `${ImageEnfant}`,
      title: "Action sociale",
      text: "Le Président de la Communauté d’Agglomération et les Vice-président(e)s et les conseillers membres du bureau vous souhaitent une belle année 2022, faite de projets, de réussites et de sérénité pour mieux vivre ensemble.",
    },
    {
      id: 2,
      image: `${image}`,
      title: "Déchetteries et déchets ménagers",
      text: "Pas d’inquiétudes, les déchetteries à Privas, à Flaviac, à La Voulte sur Rhône, à Saint Sauveur de Montagut, au Pouzin, à Vernoux en Vivarais sont ouvertes.",
    }, 
    {
      id: 3,
      image: `${image}`,
      title: "Sport et culture",
      text: "blabla",
    }, 
    {
      id: 4,
      image: `${image}`,
      title: "Transport",
      text: "Le covoiturage est un mode de transport utile et sûr pour vous déplacer au quotidien tout en limitant vos contacts. Dans le cadre de la crise sanitaire, il est possible de covoiturer et de se déplacer en respectant les directives gouvernementales !",
    }, 
    {
      id: 5,
      image: `${image}`,
      title: "Économie",
      text: "Découvrez les aides aux commerces de proximité dans le cadre du Plan régional."
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
          <img src={slide.image} alt=""/>
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