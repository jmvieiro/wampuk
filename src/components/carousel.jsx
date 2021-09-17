import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Educador from "./educador";
import React from "react";
import Slider from "react-slick";
import educador from "../images/educador.png";

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const educadores = [
    {
      title: "Educador 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ut iaculis nunc sit.",
      img: educador,
    },
    {
      title: "Educador 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ut iaculis nunc sit.",
      img: educador,
    },
    {
      title: "Educador 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ut iaculis nunc sit.",
      img: educador,
    },
    {
      title: "Educador 4",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ut iaculis nunc sit.",
      img: educador,
    },
    {
      title: "Educador 5",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ut iaculis nunc sit.",
      img: educador,
    },
    {
      title: "Educador 6",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ut iaculis nunc sit.",
      img: educador,
    },
  ];

  return (
    <Slider {...settings}>
      {educadores.map((educador) => {
        return (
          <Educador
            title={educador.title}
            text={educador.text}
            img={educador.img}
          />
        );
      })}
    </Slider>
  );
};

export default Carousel;
