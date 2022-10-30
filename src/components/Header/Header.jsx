import "rsuite/dist/rsuite.min.css";    //para instalar rsuite debo importar el css)
import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

export const Header = () => (
  <><Navbar style={{ backgroundColor: "yellow" }}>
      <Navbar.Brand>
        <img src={logo} className="laptop" alt="logo" style={{ width:"200px", height:"200px"}} />
      </Navbar.Brand>
  
      <Nav pullRight>
        <Nav.Item icon={<HomeIcon />}><Link to="/" >Inicio</Link></Nav.Item>
        <Nav.Item><Link to="/about" >Nosotros</Link></Nav.Item>
        <Nav.Menu title="Servicios">
          <Nav.Item>Decoración con plantas</Nav.Item>
          <Nav.Item>Diseño y mantenimiento de jardines</Nav.Item>
        </Nav.Menu>
        <Nav.Item><Link to="/projects" >Galeria</Link></Nav.Item>
        <Nav.Item><Link to="/blog" >Blog</Link></Nav.Item>
        <Nav.Item><Link to="/contact" >Contacto</Link></Nav.Item>
      </Nav>
      </Navbar></>
);











