import Paragraph from "../../atoms/Paragraph/Paragraph";
import "./styles.css";

interface IntroContainerProps {
  introText: string;
}

function IntroContainer({ introText }: IntroContainerProps) {
  return (
    <div id="intro-container">
      <Paragraph text={introText} />
    </div>
  );
}

export default IntroContainer;
