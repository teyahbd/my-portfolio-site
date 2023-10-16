import CreditFooter from "../../atoms/CreditFooter/CreditFooter";
import ContactFooter from "../../organisms/ContactFooter/ContactFooter";
import Project from "../../organisms/Project/Project";
import "./styles.css";
import { Info, ProjectFields } from "../../App";
import IntroParagraph from "../../atoms/IntroParagraph/IntroParagraph";
import LinkButton from "../../atoms/LinkButton/LinkButton";

interface ScrollContainerProps {
  intro: string;
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
      {props.projects.map((project, index) => {
        return (
          <>
            <Project>
              {index !== 0 ? <p className="separator">✿✿✿</p> : <></>}
              <div className="project-header">
                <h4 className="project-name">
                  {(project.name ?? "").toLowerCase()}
                </h4>
                <div className="project-links">
                  {project.repo_link ? (
                    <LinkButton name="github" link={project.repo_link} />
                  ) : (
                    <></>
                  )}

                  {project.hosted_link ? (
                    <LinkButton name="globe" link={project.hosted_link} />
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <p className="project-desc">{project.description ?? ""}</p>
            </Project>
          </>
        );
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
