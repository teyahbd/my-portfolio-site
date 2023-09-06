import NavButton from "../../atoms/NavButton/NavButton";
import "./styles.css";

interface NavBarProps {
  isMobile: boolean;
}
// should this be a list?
function NavBar(props: NavBarProps) {
  const navOptions = ["experience", "projects", "contact"];
  return (
    <nav>
      {navOptions.map((option) => {
        return (
          <NavButton text={option} isMobile={props.isMobile} key={option} />
        );
      })}
    </nav>
  );
}

export default NavBar;
