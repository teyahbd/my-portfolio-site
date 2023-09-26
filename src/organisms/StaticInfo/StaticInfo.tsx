import Email from "../../atoms/Email/Email";
import SocialButtonContainer from "../../molecules/SocialButtonContainer.tsx/SocialButtonContainer";
import "./styles.css";

function StaticInfo() {
  return (
    <header>
      <div id="name-title">
        <h1>Teyah Brennen-Davies</h1>
        <h2>software engineer</h2>
      </div>
      {/* add nav back in later */}
      {/* <NavBar /> */}
      <div id="web-social-button-container">
        <Email />
        <SocialButtonContainer />
      </div>
    </header>
  );
}

export default StaticInfo;
