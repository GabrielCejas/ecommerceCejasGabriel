import React from "react";
import { Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <h1 className="greeting p-4">
        Bienvenidos a nuestro mercado informatico
      </h1>
      <Carousel fade className="container my-4">
        <Carousel.Item>
          <img
            className="imgCarousel d-block w-100"
            src={require(`../assets/placaMadre.jpg`).default}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Placas Madre</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imgCarousel d-block w-100"
            src={require(`../assets/memoria.jpg`).default}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Memorias RAM</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" imgCarousel d-block w-100"
            src={require(`../assets/micro.jpg`).default}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Microprocesadores</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Home;
