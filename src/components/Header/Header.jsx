import "rsuite/dist/rsuite.min.css";    //para instalar rsuite debo importar el css)
import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => (
  <><Navbar style={{ backgroundColor: "black" }}>
      <Navbar.Brand>
        <img src={logo} className="laptop" alt="logo" style={{ width:"200px", height:"200px"}} />
      </Navbar.Brand>
  
      <Nav className="nav-style" pullRight>
        <Nav.Item icon={<HomeIcon />}><Link style={{ color: "white" }} to="/" >Inicio</Link></Nav.Item>
        <Nav.Item><Link style={{ color: "white" }} to="/about" >Nosotros</Link></Nav.Item>
        <Nav.Menu title="Servicios">
          <Nav.Item style={{ color: "white" }}>Decoración con plantas</Nav.Item>
          <Nav.Item style={{ color: "white" }}>Diseño y mantenimiento de jardines</Nav.Item>
        </Nav.Menu>
        <Nav.Item><Link style={{ color: "white" }} to="/projects" >Galeria</Link></Nav.Item>
        <Nav.Item><Link style={{ color: "white" }} to="/blog" >Blog</Link></Nav.Item>
        <Nav.Item><Link style={{ color: "white" }} to="/contact" >Contacto</Link></Nav.Item>
      </Nav>
      </Navbar></>
);











