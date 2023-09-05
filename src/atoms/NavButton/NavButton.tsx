import "./styles.css";

interface NavButtonProps {
  text: string;
  isMobile: boolean;
}

function NavButton(props: NavButtonProps) {
  return (
    <>
      {props.isMobile ? <></> : <a className="web-nav-button">{props.text}</a>}
    </>
  );
}

export default NavButton;
