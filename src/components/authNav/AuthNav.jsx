import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export const AuthNav = () => {
  return (
    <div>
      <NavLink
        className={({ isActive }) => `${isActive && css.active} ${css.link}`}
        to="/register">
        Register
      </NavLink>
      <NavLink
        className={({ isActive }) => `${isActive && css.active} ${css.link}`}
        to="/login">
        Log In
      </NavLink>
    </div>
  );
};
