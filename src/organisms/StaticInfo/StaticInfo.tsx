import Email from "../../atoms/Email/Email";
import { LinkType } from "../../atoms/LinkButton/LinkButton";
import LinkButtonContainer from "../../molecules/LinkButtonContainer.tsx/LinkButtonContainer";
import "./styles.css";

interface StaticInfo {
  info: { [key: string]: string };
}

function StaticInfo(props: StaticInfo) {
  const icons: LinkType[] = [
    {
      name: "github",
      link: props.info.github_profile_url ?? "https://github.com/teyahbd/",
    },
    {
      name: "linkedin",
      link:
        props.info.linkedin_profile_url ??
        "https://www.linkedin.com/in/teyah-brennen-davies/",
    },
  ];
  return (
    <header className="fade-in-quick">
      <div id="name-title">
        <h1>Teyah Brennen-Davies</h1>
        <h2>software engineer</h2>
      </div>
      <div id="web-social-button-container">
        <Email />
        <LinkButtonContainer icons={icons} />
      </div>
    </header>
  );
}

export default StaticInfo;
