import NavButton from "../../atoms/NavButton/NavButton";
import "./styles.css";

interface NavBarProps {
  isMobile: boolean;
}
function NavBar(props: NavBarProps) {
  const navOptions = ["home", "about", "skills", "portfolio", "contact"];
  return (
    <nav>
      {navOptions.map((option) => {
        return <NavButton text={option} isMobile={props.isMobile} />;
      })}
    </nav>
  );
}

export default NavBar;
