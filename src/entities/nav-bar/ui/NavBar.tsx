import {  NavLink } from "react-router";
import { ROUTE } from "../../../shared/config";

export const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to={ROUTE.characters.list}>{ROUTE.characters.name}</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={ROUTE.locations.list}>{ROUTE.locations.name}</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={ROUTE.episodes.list}>{ROUTE.episodes.name}</NavLink>
        </li>
      </ul>
    </nav>
  );
};
