import Email from "../../atoms/Email/Email";
import SocialButtonContainer from "../../molecules/SocialButtonContainer.tsx/SocialButtonContainer";
import "./styles.css";

function StaticInfo() {
  return (
    <header className="fade-in-quick">
      <div id="name-title">
        <h1>Teyah Brennen-Davies</h1>
        <h2>software engineer</h2>
      </div>
      <div id="web-social-button-container">
        <Email />
        <SocialButtonContainer />
      </div>
    </header>
  );
}

export default StaticInfo;
