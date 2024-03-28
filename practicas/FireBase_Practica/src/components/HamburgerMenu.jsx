import { stack as Menu } from "react-burger-menu";
import "../styles/HamburgerMenu.css";
import { Link } from "react-router-dom";

export const HamburgerMenu = () => {
  return (
    <>
      <Menu noOverlay disableOverlayClick>
        <h1 className="header">Buscador</h1>
        <Link to="/searchMovie" className="menu-item">
          Peliculas
        </Link>
        <Link to="/searchActor" className="menu-item">
          Actores
        </Link>
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
