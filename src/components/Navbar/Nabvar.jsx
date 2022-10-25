import "rsuite/dist/rsuite.min.css";    //para instalar rsuite debo importar el css)
import { Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
export const Nabvar = () => (
  <Nav>
    <Nav.Item icon={<HomeIcon />}>Home</Nav.Item>
    <Nav.Item>News</Nav.Item>
    <Nav.Item>Solutions</Nav.Item>
    <Nav.Item>Products</Nav.Item>
    <Nav.Item>About</Nav.Item>
  </Nav>
);











