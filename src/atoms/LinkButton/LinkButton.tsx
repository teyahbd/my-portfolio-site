import "./styles.css";

export interface LinkButtonProps {
  name: "github" | "linkedin" | "globe";
  link: string;
}

function LinkButton(props: LinkButtonProps) {
  return (
    <a href={props.link} target="_blank">
      <span
        className={
          props.name === "globe"
            ? "fa-solid fa-globe"
            : `fa-brands fa-${props.name}`
        }
      ></span>
    </a>
  );
}

export default LinkButton;
