import "./styles.css";

export interface IntroParagraphProps {
  text: string[];
  forMobile: boolean;
}

function IntroParagraph(props: IntroParagraphProps) {
  return (
    <section
      id="intro"
      className={`${props.forMobile ? "mobile-only" : "web-only"}`}
    >
      <h2 className="scroll-header intro-header">Hello!</h2>
      {props.text.map((paragraph, index) => {
        return (
          <p
            className={`intro-paragraph ${
              props.forMobile ? "mobile-only" : "web-only"
            } ${index === 0 ? "top-paragraph" : null}`}
          >
            {paragraph}
          </p>
        );
      })}
    </section>
  );
}

export default IntroParagraph;
