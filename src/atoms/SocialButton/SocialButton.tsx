import "./styles.css";

interface SocialButtonProps {
  type: "github" | "linkedin";
}

function SocialButton(props: SocialButtonProps) {
  return (
    <>
      {props.type === "github" ? (
        <a href="https://github.com/teyahbd" target="_blank">
          <span className="fa-brands fa-github"></span>
        </a>
      ) : (
        <a
          href="https://www.linkedin.com/in/teyah-brennen-davies"
          target="_blank"
        >
          <span className="fa-brands fa-linkedin"></span>
        </a>
      )}
    </>
  );
}

export default SocialButton;
