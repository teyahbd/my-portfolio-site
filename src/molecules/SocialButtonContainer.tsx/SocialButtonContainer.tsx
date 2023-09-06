import SocialButton from "../../atoms/SocialButton/SocialButton";
import "./styles.css";

function SocialButtonContainer() {
  return (
    <ul id="social-button-list">
      <li>
        <SocialButton type="github" />
      </li>
      <li>
        <SocialButton type="linkedin" />
      </li>
    </ul>
  );
}

export default SocialButtonContainer;
