import "rsuite/dist/rsuite.min.css";    //para instalar rsuite debo importar el css)
import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

export const Header = () => (
  <><Navbar>
    <Navbar.Brand>
    <img src={logo} className="laptop" alt="logo" />
    </Navbar.Brand>
  
  <Nav pullRight>
      <Nav.Item icon={<HomeIcon />}><Link to="/" >Inicio</Link></Nav.Item>
      <Nav.Item><Link to="/about" >Nosotros</Link></Nav.Item>
      <Nav.Item>Servicios</Nav.Item>
      <Nav.Item><Link to="/projects" >Galeria</Link></Nav.Item>
      <Nav.Item>Blog</Nav.Item>
      <Nav.Item>Contacto</Nav.Item>
    </Nav>
    </Navbar></>
);











