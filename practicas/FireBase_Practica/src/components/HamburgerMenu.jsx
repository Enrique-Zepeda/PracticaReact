import { stack as Menu } from "react-burger-menu";
import "../styles/HamburgerMenu.css";
import { Link } from "react-router-dom";

export const HamburgerMenu = () => {
  return (
    <>
      <Menu noOverlay disableOverlayClick>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <Link to="/register">Buscador Peliculas</Link>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
      </Menu>
    </>
  );
};
