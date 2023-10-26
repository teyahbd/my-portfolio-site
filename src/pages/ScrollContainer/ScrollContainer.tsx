import CreditFooter from "../../atoms/CreditFooter/CreditFooter";
import ContactFooter from "../../organisms/ContactFooter/ContactFooter";
import Project from "../../organisms/Project/Project";
import "./styles.css";
import { Info, ProjectFields } from "../../App";
import IntroParagraph from "../../atoms/IntroParagraph/IntroParagraph";
import LinkButton from "../../atoms/LinkButton/LinkButton";
import StackFilter from "../../organisms/StackFilter/StackFilter";
import { useState } from "react";

interface ScrollContainerProps {
  intro: string;
  projects: ProjectFields[];
  info: Info;
  stack: string[];
}

function ScrollContainer(props: ScrollContainerProps) {
  const [selectedStack, setSelectedStack] = useState([]);
  const [isAnd, setIsAnd] = useState(false);
  return (
    <div id="scroll-container" className="fade-in-slow">
      <IntroParagraph text={props.intro} forMobile={false} />
      {/* <div id="ombre-container">
        <div id="mini-ombre-circle" className="fade-in-quick"></div>
        <div id="mini-ombre-circle" className="fade-in-quick"></div>
        <div id="mini-ombre-circle" className="fade-in-quick"></div>
      </div> */}
      <StackFilter
        stack={props.stack}
        selectedStack={selectedStack}
        setSelectedStack={setSelectedStack}
        isAnd={isAnd}
        setIsAnd={setIsAnd}
      />
      {props.projects.map((project, index) => {
        {
          const isStackSelected = isAnd
            ? selectedStack.every((stack) => project.stack?.includes(stack))
            : selectedStack.some((stack) => project.stack?.includes(stack));

          return isStackSelected || selectedStack.length === 0 ? (
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
          ) : (
            <></>
          );
        }
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
