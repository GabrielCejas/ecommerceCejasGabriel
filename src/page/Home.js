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
      <div className="marcasTitulo">
        <h2>Nuestras Marcas</h2>
      </div>
      <div className="marcasContainer">
        <h4>Geforce</h4>
        <h4>Intel</h4>
        <h4>Asus</h4>
        <h4>Western Digital</h4>
        <h4>Kingston</h4>
        <h4>AMD</h4>
      </div>
      <div className="marcasTitulo">
        <h2>Características</h2>
      </div>
      <div className="marcasContainer">
        <h4>Soporte 24/7</h4>
        <h4>Grandes plazos de entrega</h4>
        <h4>Los mejores precios</h4>
      </div>
    </>
  );
};

export default Home;
