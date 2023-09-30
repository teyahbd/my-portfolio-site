import Email from "../../atoms/Email/Email";
import { LinkType } from "../../atoms/LinkButton/LinkButton";
import LinkButtonContainer from "../../molecules/LinkButtonContainer.tsx/LinkButtonContainer";
import "./styles.css";

interface HeaderSection {
  info: { [key: string]: string };
}

function HeaderSection(props: HeaderSection) {
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
      <div id="name-title-container">
        <h1>{props.info.name ?? "Teyah"}</h1>
        <h2>{(props.info.job_title ?? "software engineer").toLowerCase()}</h2>
      </div>
      <div id="web-contact-container">
        <Email emailAddress={props.info.email ?? ""} />
        <LinkButtonContainer icons={icons} />
      </div>
    </header>
  );
}

export default HeaderSection;
