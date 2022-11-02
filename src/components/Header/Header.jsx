import "rsuite/dist/rsuite.min.css";    //para instalar rsuite debo importar el css)
import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import logoplanta from "../../images/logoplanta.png";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => (
  <><Navbar style={{ backgroundColor: "black" }}>
      <Navbar.Brand className="style-navbar-brand">
        <img src={logoplanta} className="laptop" alt="logo" style={{ width:"32px", height:"26px"}} />
          JARDIN D´ CHILL
      </Navbar.Brand>
  
      <Nav className="nav-style" pullRight>
        <Nav.Item icon={<HomeIcon  style={{ color: "#49BF04" }}/>}><Link style={{ color: "#49BF04" }} to="/" >Inicio</Link></Nav.Item>
        <Nav.Item><Link style={{ color: "#49BF04" }} to="/about" >Nosotros</Link></Nav.Item>
        <Nav.Menu title="Servicios" style={{ color: "#49BF04" }}>
          <Nav.Item style={{ color: "#49BF04" }}>Decoración con plantas</Nav.Item>
          <Nav.Item style={{ color: "#49BF04" }}>Diseño y mantenimiento de jardines</Nav.Item>
        </Nav.Menu>
        <Nav.Item><Link style={{ color: "#49BF04" }} to="/projects" >Galeria</Link></Nav.Item>
        <Nav.Item><Link style={{ color: "#49BF04" }} to="/blog" >Blog</Link></Nav.Item>
        <Nav.Item><Link style={{ color: "#49BF04" }} to="/contact" >Contacto</Link></Nav.Item>
      </Nav>
      </Navbar></>
);











