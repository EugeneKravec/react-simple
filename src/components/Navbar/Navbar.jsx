import { NavLink } from "react-router-dom";
import c from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={c.nav}>
      <div className={c.item}>
        <NavLink to="/profile" className={c.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="/dialogs">Messages</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="/news">News</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="/music">Music</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
