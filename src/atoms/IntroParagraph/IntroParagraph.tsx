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
      {props.text.map((paragraph, index) => {
        return (
          <p
            className={`intro-paragraph ${
              props.forMobile ? "mobile-only fade-in-slow" : "web-only"
            }`}
            key={index}
          >
            {paragraph}
          </p>
        );
      })}
    </section>
  );
}

export default IntroParagraph;
