import "./styles.css";

interface NavButtonProps {
  text: string;
}

function NavButton(props: NavButtonProps) {
  const handleClick = () => {
    const element = document.getElementById(props.text);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <a className="web-nav-button" onClick={handleClick}>
        {props.text}
      </a>
    </>
  );
}

export default NavButton;
