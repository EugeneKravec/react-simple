import c from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={c.nav}>
      <div>
        <a href="#1" className={`${c.item} ${c.active}`}>
          Profile
        </a>
      </div>
      <div>
        <a href="#1" className={c.nav}>
          Messages
        </a>
      </div>
      <div>
        <a href="#1" className={c.nav}>
          News
        </a>
      </div>
      <div>
        <a href="#1" className={c.nav}>
          Music
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
