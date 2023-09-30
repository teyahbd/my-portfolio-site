import "./styles.css";

export interface LinkType {
  name: "github" | "linkedin" | "globe";
  link: string;
}

function LinkButton(props: LinkType) {
  return (
    <a href={props.link} target="_blank">
      <span className={`fa-brands fa-${props.name}`}></span>
    </a>
  );
}

export default LinkButton;
