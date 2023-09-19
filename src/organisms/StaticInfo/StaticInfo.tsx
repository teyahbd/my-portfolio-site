import SocialButtonContainer from "../../molecules/SocialButtonContainer.tsx/SocialButtonContainer";
import "./styles.css";

function StaticInfo() {
  return (
    <header>
      <h1>Teyah Brennen-Davies</h1>
      <h2>Software Engineer</h2>
      <p>about</p>
      <p>experience</p>
      <p>projects</p>
      <SocialButtonContainer />
      <p id="email">heya@teyah.dev</p>
    </header>
  );
}

export default StaticInfo;
