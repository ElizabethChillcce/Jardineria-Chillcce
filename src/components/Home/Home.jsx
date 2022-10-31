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
          <h2>Bienvenidos</h2>
        </Content>
        <Sidebar>Foto</Sidebar>
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
