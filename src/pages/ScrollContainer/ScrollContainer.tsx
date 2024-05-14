import CreditFooter from "../../atoms/CreditFooter/CreditFooter";
import ContactFooter from "../../organisms/ContactFooter/ContactFooter";
import Project from "../../organisms/Project/Project";
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
      {/* <div id="ombre-container">
        <div id="mini-ombre-circle" className="fade-in-quick"></div>
        <div id="mini-ombre-circle" className="fade-in-quick"></div>
        <div id="mini-ombre-circle" className="fade-in-quick"></div>
      </div> */}
      <h2 id="projects-header">Here are some cool things I've built!</h2>
      {props.projects.map((project, index) => {
        return <Project project={project} index={index} />;
      })}
      <ContactFooter
        email={props.info.email ?? ""}
        info={props.info}
        forMobile={true}
      />
      <CreditFooter name={props.info.name ?? "Teyah"} />
    </div>
  );
}

export default ScrollContainer;
