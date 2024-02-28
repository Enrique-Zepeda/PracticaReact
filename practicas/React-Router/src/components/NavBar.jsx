import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">HomeScreen</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  );
};
