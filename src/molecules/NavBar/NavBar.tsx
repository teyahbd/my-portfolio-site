import NavButton from "../../atoms/NavButton/NavButton";
import "./styles.css";

// should this be a list?
function NavBar() {
  const navOptions = ["about", "experience", "projects"];
  return (
    <nav>
      {navOptions.map((option) => {
        return <NavButton text={option} key={option} />;
      })}
    </nav>
  );
}

export default NavBar;
