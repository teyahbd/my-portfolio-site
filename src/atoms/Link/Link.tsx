import { LinkType } from "../../data/projects";
import "./styles.css";

export interface LinkProps {
  link: LinkType;
}

function Link({ link }: LinkProps) {
  return (
    <a className="project-link" href={link.link} target="_blank">
      <i className="fa-solid fa-link link-icon"></i>
      {link.name}
    </a>
  );
}

export default Link;
