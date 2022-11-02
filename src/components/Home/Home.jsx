import React from "react";
/* import { Link } from "react-router-dom"; */
import { Header } from "../Header/Header";
import { Carousel, Container, Content, Footer, Sidebar } from 'rsuite';
import tulipanes from "../../images/tulipanes.png";
import chiflera from "../../images/chiflera.jpg";
import orejaElefante from "../../images/orejaElefante.png";
import sembrando from "../../images/sembrando.png";
import "./Home.css";
import { createIconFont } from '@rsuite/icons';
import suculentaMini from "../../images/suculentaMini.jpg";

export const Home = () => {

  const IconFont = createIconFont({
    scriptUrl: '//at.alicdn.com/t/font_2144422_r174s9i1orl.js',
    commonProps: { style: { fontSize: 18, color: 'white' } },
    onLoaded: () => {
      console.log('onLoaded');
    }
  });

  return (
   <>
   <Header/>
   <Carousel autoplay className="custom-slider">
    <img src={orejaElefante} height="250" alt="logo" />
    <img src={tulipanes} height="250" alt="logo" />
    <img src={chiflera} height="250" alt="logo" />
    <img src={sembrando} height="250" alt="logo" />
    </Carousel>

    <div className="show-container">

    <Container>
      {/* <Header>Header</Header> */}
      <Container>
        <Content>
          <section>
          <h2 className="title">Bienvenidos a Jardín d´ Chill</h2>
          <p>Somos una empresa de jardinería dedicada al diseño, construcción, mantenimiento y asesoramiento de jardines privados, comunitarios y públicos.</p>
          <p>Diseñamos y ejecutamos jardines de todos los estilos, y gracias a la experiencia acumulada en nuestros 20 años de actividad y a nuestro equipo de jóvenes profesionales con amplia formación y experiencia en el ámbito de la jardinería y paisajismo, nos permiten asesorar y recomendar el jardín que usted y su espacio necesitan.</p>
          <h4>Nuestros servicios incluyen:</h4>
          <ul>
            <li>Diseño y mantenimiento de jardines públicos, privados.</li>
            <li>Corte de césped</li>
            <li>Abonos</li>
            <li>Mantenimiento y venta de plantas de interior</li>
            <li>Poda y corte de arboles y arbustos</li>
            <li>Fumigación de plantas</li>
            <li>Deshierbado y limpieza de jardines</li>
          </ul>
          </section>
        </Content>
        <Sidebar>
        <img src={suculentaMini} className="laptop" alt="suculenta" style={{ width: '100%'}} />
        </Sidebar>
      </Container>
      <Footer /* style={{backgroundColor:"yellow"}} */>
        <h5 className="footer-style">Contacto</h5>
          <div className="container-footer">
            <p className="footer-style"><i className="fa-solid fa-phone"></i>{/* <IconFont icon="rs-iconemail" /> */}941771900</p>
            <p className="footer-style"><IconFont icon="rs-iconemail-fill" />gardenChill@gmail.com</p>
          </div>
      </Footer>
    </Container>
  </div>

  </>
  );
}
