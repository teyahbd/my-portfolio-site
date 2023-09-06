import NavBar from "../../molecules/NavBar/NavBar";
import "./styles.css";

function Header() {
  return (
    <header>
      <NavBar isMobile={false} />
    </header>
  );
}

export default Header;
