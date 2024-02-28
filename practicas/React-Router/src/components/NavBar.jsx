import { NavLink } from "react-router-dom";
import "./navbar.css";
export const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            HomeScreen
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/dashBoard">DashBoard</NavLink>
        </li>
      </ul>
    </div>
  );
};
