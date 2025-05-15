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
  // const majorProjects = props.projects.filter((project) => project.isMajor);
  // const minorProjects = props.projects.filter((project) => !project.isMajor);
  return (
    <div id="scroll-container" className="fade-in-quick">
      <IntroParagraph text={props.intro} forMobile={false} />
      {/* <div id="ombre-container">
        <div id="mini-ombre-circle" className="fade-in-quick"></div>
        <div id="mini-ombre-circle" className="fade-in-quick"></div>
        <div id="mini-ombre-circle" className="fade-in-quick"></div>
      </div> */}
      <h2 className="scroll-header">Here's a bit of what I'm good at!</h2>
      <p className="stack-desc">
        <span className={"fa-solid fa-language name-icon"}></span>
        <span className="stack-type">Languages</span> - TypeScript, Python,
        JavaScript, SQL
      </p>
      <p className="stack-desc">
        <span className={"fa-solid fa-desktop name-icon"}></span>
        <span className="stack-type">Front End</span> - React, Next.js, React Native,
        Vue
      </p>
      <p className="stack-desc">
        <span className={"fa-solid fa-server name-icon"}></span>
        <span className="stack-type">Back End</span> - Node, Express, Flask,
        REST, GraphQL
      </p>
      <p className="stack-desc">
        <span className={"fa-solid fa-database name-icon"}></span>
        <span className="stack-type">Data</span> - Apache Airflow, Apache Spark, Amazon Redshift
      </p>
      <p className="stack-desc">
        <span className={"fa-solid fa-cloud name-icon"}></span>
        <span className="stack-type">Cloud</span> - AWS & Azure
      </p>
      <p className="stack-desc">
        <span className={"fa-solid fa-repeat name-icon"}></span>
        <span className="stack-type">CI/CD</span> - AWS CodeBuild, GitHub Actions, Gitlab
        CI/CD, Docker, Bitrise
      </p>
      <p className="stack-desc">
        <span className={"fa-solid fa-vial name-icon"}></span>
        <span className="stack-type">Test</span> - Jest, Cypress, Detox, Pytest,
        Vitest, Pact, React Native Testing Library
      </p>
      {/* <h2 className="scroll-header">Here's some cool things I've built!</h2>
      <h2 className="scroll-subheader">Major Projects</h2>
      {majorProjects.map((project, index) => {
        return <Project project={project} index={index} />;
      })}
      <h2 className="scroll-subheader">Minor Projects</h2>
      {minorProjects.map((project, index) => {
        return <Project project={project} index={index} />;
      })} */}
      <ContactFooter
        email={props.info.email ?? ""}
        info={props.info}
        forMobile={true}
      />
      <CreditFooter />
    </div>
  );
}

export default ScrollContainer;
