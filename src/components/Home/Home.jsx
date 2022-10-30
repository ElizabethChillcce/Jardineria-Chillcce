import React from "react";
/* import { Link } from "react-router-dom"; */
import { Header } from "../Header/Header";
import { Carousel, Container, Content, Footer, Sidebar } from 'rsuite';
import lanceadas from "../../images/lanceadas.jpg";
import chiflera from "../../images/chiflera.jpg";
import orejaElefante from "../../images/orejaElefante.png";

export const Home = () => {
  return (
   <>
   <Header/>
   <Carousel autoplay className="custom-slider">
    <img src={orejaElefante} height="250" alt="logo" />
    <img src={lanceadas} height="250" alt="logo" />
    <img src={chiflera} height="250" alt="logo" />
    </Carousel>

    <div className="show-container">

    <Container>
      {/* <Header>Header</Header> */}
      <Container>
        <Content>Bienvenidos</Content>
        <Sidebar>Foto</Sidebar>
      </Container>
      <Footer>Pie de Página</Footer>
    </Container>
  </div>

  </>
  );
}
