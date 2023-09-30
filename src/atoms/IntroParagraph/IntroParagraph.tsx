import "./styles.css";

export interface IntroParagraphProps {
  text: string;
}

function IntroParagraph(props: IntroParagraphProps) {
  return <p id="intro-paragraph">{props.text}</p>;
}

export default IntroParagraph;
