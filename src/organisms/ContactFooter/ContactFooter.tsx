import Email from "../../atoms/Email/Email";
import { LinkButtonProps } from "../../atoms/LinkButton/LinkButton";
import { Info } from "../../data/info";
import LinkButtonContainer from "../../molecules/LinkButtonContainer.tsx/LinkButtonContainer";
import "./styles.css";

interface ContactFooterProps {
  email: string;
  info: Info;
  forMobile: boolean;
}

function ContactFooter(props: ContactFooterProps) {
  const icons: LinkButtonProps[] = [
    {
      name: "github",
      link: props.info.github_profile_url ?? "https://github.com/teyahbd/",
    },
    {
      name: "linkedin",
      link:
        props.info.linkedin_profile_url ??
        "https://www.linkedin.com/in/teyahbd",
    },
  ];
  return (
    <div
      id="contact-footer"
      className={`${props.forMobile ? "mobile-only" : "web-only"}`}
    >
      <Email emailAddress={props.email} />
      <LinkButtonContainer icons={icons} />
    </div>
  );
}

export default ContactFooter;
