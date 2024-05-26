import ContactFooter from "../../organisms/ContactFooter/ContactFooter";
import "./styles.css";
import IntroParagraph from "../../atoms/IntroParagraph/IntroParagraph";
import { ProjectFields } from "../../data/projects";
import { Info } from "../../data/info";

interface ScrollContainerProps {
  intro: string[];
  projects: ProjectFields[];
  info: Info;
}

function ScrollContainer(props: ScrollContainerProps) {
  return (
    <div id="scroll-container" className="fade-in-slow">
      <IntroParagraph text={props.intro} forMobile={false} />
      <ContactFooter
        email={props.info.email ?? ""}
        info={props.info}
        forMobile={true}
      />
    </div>
  );
}

export default ScrollContainer;
