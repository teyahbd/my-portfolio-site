import CreditFooter from "../../atoms/CreditFooter/CreditFooter";
import ContactFooter from "../../organisms/ContactFooter/ContactFooter";
import Project from "../../molecules/Project/Project";
import "./styles.css";
import { Info } from "../../App";
import IntroParagraph from "../../atoms/IntroParagraph/IntroParagraph";

interface ScrollContainer {
  intro: string;
  projects: object;
  info: Info;
}

function ScrollContainer(props: ScrollContainer) {
  return (
    <div id="scroll-container" className="fade-in-slow">
      <IntroParagraph text={props.intro} />
      {props.projects["2023"].length > 0 ? (
        <h4 className="year">- 2023 -</h4>
      ) : (
        <></>
      )}
      {props.projects["2023"].map((project) => {
        const hasGithubLink = project.fields.repo_link;
        const hasHostedLink = project.fields.hosted_link;
        return (
          <Project>
            <div className="project-header">
              <h4 className="project-name">
                {project.fields.name ? project.fields.name.toLowerCase() : ""}
              </h4>
              <div className="project-icon-container">
                {hasGithubLink ? (
                  <a
                    className="project-link-icon"
                    href={project.fields.repo_link}
                  >
                    <i className="fa-solid fa-globe"></i>
                  </a>
                ) : (
                  <></>
                )}
                {hasHostedLink ? (
                  <a
                    className="project-link-icon"
                    href={project.fields.hosted_link}
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <p className="project-desc">{project.fields.description}</p>
          </Project>
        );
      })}
      {props.projects["2022"].length > 0 ? (
        <h4 className="year">- 2022 -</h4>
      ) : (
        <></>
      )}
      {props.projects["2022"].map((project) => {
        const hasGithubLink = project.fields.repo_link;
        const hasHostedLink = project.fields.hosted_link;
        return (
          <Project>
            <div className="project-header">
              <h4 className="project-name">
                {project.fields.name ? project.fields.name.toLowerCase() : ""}
              </h4>
              <div className="project-icon-container">
                {hasGithubLink ? (
                  <a
                    className="project-link-icon"
                    href={project.fields.repo_link}
                  >
                    <i className="fa-solid fa-globe"></i>
                  </a>
                ) : (
                  <></>
                )}
                {hasHostedLink ? (
                  <a
                    className="project-link-icon"
                    href={project.fields.hosted_link}
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <p className="project-desc">{project.fields.description}</p>
          </Project>
        );
      })}
      {props.projects["2021"].length > 0 ? (
        <h4 className="year">- 2021 -</h4>
      ) : (
        <></>
      )}
      {props.projects["2021"].map((project) => {
        const hasGithubLink = project.fields.repo_link;
        const hasHostedLink = project.fields.hosted_link;
        return (
          <Project>
            <div className="project-header">
              <h4 className="project-name">
                {project.fields.name ? project.fields.name.toLowerCase() : ""}
              </h4>
              <div className="project-icon-container">
                {hasGithubLink ? (
                  <a
                    className="project-link-icon"
                    href={project.fields.repo_link}
                  >
                    <i className="fa-solid fa-globe"></i>
                  </a>
                ) : (
                  <></>
                )}
                {hasHostedLink ? (
                  <a
                    className="project-link-icon"
                    href={project.fields.hosted_link}
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <p className="project-desc">{project.fields.description}</p>
          </Project>
        );
      })}
      {props.projects["2020"].length > 0 ? (
        <h4 className="year">- 2020 -</h4>
      ) : (
        <></>
      )}
      {props.projects["2020"].map((project) => {
        const hasGithubLink = project.fields.repo_link;
        const hasHostedLink = project.fields.hosted_link;
        return (
          <Project>
            <div className="project-header">
              <h4 className="project-name">
                {project.fields.name ? project.fields.name.toLowerCase() : ""}
              </h4>
              <div className="project-icon-container">
                {hasGithubLink ? (
                  <a
                    className="project-link-icon"
                    href={project.fields.repo_link}
                  >
                    <i className="fa-solid fa-globe"></i>
                  </a>
                ) : (
                  <></>
                )}
                {hasHostedLink ? (
                  <a
                    className="project-link-icon"
                    href={project.fields.hosted_link}
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <p className="project-desc">{project.fields.description}</p>
          </Project>
        );
      })}
      {props.projects["2019"].length > 0 ? (
        <h4 className="year">- 2019 -</h4>
      ) : (
        <></>
      )}

      {props.projects["2019"].map((project) => {
        const hasGithubLink = project.fields.repo_link;
        const hasHostedLink = project.fields.hosted_link;
        return (
          <Project>
            <div className="project-header">
              <h4 className="project-name">
                {project.fields.name ? project.fields.name.toLowerCase() : ""}
              </h4>
              <div className="project-icon-container">
                {hasGithubLink ? (
                  <a
                    className="project-link-icon"
                    href={project.fields.repo_link}
                  >
                    <i className="fa-solid fa-globe"></i>
                  </a>
                ) : (
                  <></>
                )}
                {hasHostedLink ? (
                  <a
                    className="project-link-icon"
                    href={project.fields.hosted_link}
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <p className="project-desc">{project.fields.description}</p>
          </Project>
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
