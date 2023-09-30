import LinkButton, { LinkButtonProps } from "../../atoms/LinkButton/LinkButton";
import "./styles.css";

export interface LinkButtonContainerProps {
  icons: LinkButtonProps[];
}

function LinkButtonContainer(props: LinkButtonContainerProps) {
  return (
    <ul className="link-button-list">
      {props.icons.map((icon) => {
        return (
          <li key={icon.name}>
            <LinkButton name={`${icon.name}`} link={`${icon.link}`} />
          </li>
        );
      })}
    </ul>
  );
}

export default LinkButtonContainer;
