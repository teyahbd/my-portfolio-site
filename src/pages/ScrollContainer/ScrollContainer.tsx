import CreditFooter from "../../atoms/CreditFooter/CreditFooter";
import ContactFooter from "../../organisms/ContactFooter/ContactFooter";
import Project from "../../organisms/Project/Project";
import "./styles.css";
import IntroParagraph from "../../atoms/IntroParagraph/IntroParagraph";
import LinkButton from "../../atoms/LinkButton/LinkButton";
import { ProjectFields } from "../../data/projects";
import { Info } from "../../data/info";
import StackFilter from "../../organisms/StackFilter/StackFilter";
import { useEffect, useState } from "react";

interface ScrollContainerProps {
  intro: string[];
  projects: ProjectFields[];
  info: Info;
  stack: string[];
}

function ScrollContainer(props: ScrollContainerProps) {
  const [selectedStack, setSelectedStack] = useState([] as string[]);
  const [isAnd, setIsAnd] = useState(false);
  const [displayedProjectsStacks, setDisplayedProjectsStacks] = useState(
    [] as string[],
  );
  const [displayedProjects, setDisplayedProjects] = useState(
    [] as ProjectFields[],
  );

  useEffect(() => {
    const currentStacks: string[] = [];
    const currentProjects: ProjectFields[] = [];
    props.projects.forEach((project) => {
      const isStackSelected = isAnd
        ? selectedStack.every((stack) => project.stack?.includes(stack))
        : selectedStack.some((stack) => project.stack?.includes(stack));

      const displayProject = isStackSelected || selectedStack.length === 0;

      if (displayProject) {
        currentProjects.push(project);
        if (isAnd && selectedStack.length !== 0) {
          project.stack?.forEach((stack) => {
            currentStacks.push(stack);
          });
        }
      }
    });

    setDisplayedProjectsStacks(currentStacks);
    setDisplayedProjects(currentProjects);
  }, [selectedStack, isAnd, props.projects]);

  return (
    <div id="scroll-container" className="fade-in-slow">
      <IntroParagraph text={props.intro} forMobile={false} />
      {/* <div id="ombre-container">
        <div id="mini-ombre-circle" className="fade-in-quick"></div>
        <div id="mini-ombre-circle" className="fade-in-quick"></div>
        <div id="mini-ombre-circle" className="fade-in-quick"></div>
      </div> */}
      <h2 className="stack-filter-header">What would you like to see?</h2>
      <StackFilter
        stack={props.stack}
        selectedStack={selectedStack}
        setSelectedStack={setSelectedStack}
        isAnd={isAnd}
        setIsAnd={setIsAnd}
        displayedProjectsStacks={displayedProjectsStacks}
      />
      {displayedProjects.map((project, index) => {
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
