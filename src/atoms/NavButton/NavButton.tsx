import "./styles.css";

interface NavButtonProps {
  text: string;
  isMobile: boolean;
}

function NavButton(props: NavButtonProps) {
  const handleClick = () => {
    const element = document.getElementById(props.text);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {props.isMobile ? (
        <></>
      ) : (
        <a className="web-nav-button" onClick={handleClick}>
          {props.text}
        </a>
      )}
    </>
  );
}

export default NavButton;
