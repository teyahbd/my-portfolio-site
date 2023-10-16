import "./styles.css";

export interface IntroParagraphProps {
  text: string;
  forMobile: boolean;
}

function IntroParagraph(props: IntroParagraphProps) {
  return (
    <p
      id="intro-paragraph"
      className={`${props.forMobile ? "mobile-only fade-in-slow" : "web-only"}`}
    >
      {props.text}
    </p>
  );
}

export default IntroParagraph;
