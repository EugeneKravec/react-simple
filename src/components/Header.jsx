import c from "./Header.module.css";

const Header = () => {
  return (
    <header className={c.header}>
      <img
        src="https://img.freepik.com/free-psd/logo-mockup-on-grey-wall_35913-2122.jpg?size=626&ext=jpg"
        alt="logo"
      />
    </header>
  );
};

export default Header;
