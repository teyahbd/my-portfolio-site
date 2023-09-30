import LinkButton, { LinkType } from "../../atoms/LinkButton/LinkButton";
import "./styles.css";

export interface Links {
  icons: LinkType[];
}

function LinkButtonContainer(props: Links) {
  return (
    <ul id="link-button-list">
      {props.icons.map((icon) => {
        return (
          <li>
            <LinkButton name={`${icon.name}`} link={`${icon.link}`} />
          </li>
        );
      })}
    </ul>
  );
}

export default LinkButtonContainer;
