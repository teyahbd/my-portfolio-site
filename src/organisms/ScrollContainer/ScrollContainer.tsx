import { useEffect, useState } from "react";
import { fetchIntro, fetchProjects } from "../../api";
import Email from "../../atoms/Email/Email";
import IntroContainer from "../../molecules/IntroContainer/IntroContainer";
import Project from "../../molecules/Project/Project";
import SocialButtonContainer from "../../molecules/SocialButtonContainer.tsx/SocialButtonContainer";
import "./styles.css";

function ScrollContainer() {
  // loading
  const [projects, setProjects] = useState({
    2023: [],
    2022: [],
    2021: [],
    2020: [],
    2019: [],
  });
  const [intro, setIntro] = useState("");
  useEffect(() => {
    fetchProjects().then((projects) => {
      const projectYears: any = {
        2023: [],
        2022: [],
        2021: [],
        2020: [],
        2019: [],
      };

      projects.forEach((project) => {
        const year = project.fields.Year;
        const currentValues = projectYears[year] ?? null;
        if (currentValues) {
          projectYears[year] = [...currentValues, project];
        }
      });
      console.log(projectYears);
      setProjects(projectYears);
    });
    fetchIntro().then((intro) => {
      setIntro(intro.fields.Description);
    });
  }, []);

  const years = [2023, 2022, 2021, 2020, 2019];

  return (
    <div id="scroll-container">
      <IntroContainer introText={intro} />
      {projects["2023"].length > 0 ? <h4 className="year">- 2023 -</h4> : <></>}
      {projects["2023"].map((project: any) => {
        const hasGithubLink = project.fields["Repo Link"];
        const hasHostedLink = project.fields["Hosted Link"];
        return (
          <Project>
            <div className="project-header">
              <h4 className="project-name">
                {project.fields.Name.toLowerCase()}
              </h4>
              <div className="project-icon-container">
                {hasGithubLink ? (
                  <a
                    className="project-link-icon"
                    href={project.fields["Repo Link"]}
                  >
                    <i className="fa-solid fa-globe"></i>
                  </a>
                ) : (
                  <></>
                )}
                {hasHostedLink ? (
                  <a
                    className="project-link-icon"
                    href={project.fields["Hosted Link"]}
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <p className="project-desc">{project.fields.Description}</p>
          </Project>
        );
      })}
      {projects["2022"].length > 0 ? <h4 className="year">- 2022 -</h4> : <></>}
      {projects["2022"].map((project: any) => {
        const hasGithubLink = project.fields["Repo Link"];
        const hasHostedLink = project.fields["Hosted Link"];
        return (
          <Project>
            <div className="project-header">
              <h4 className="project-name">
                {project.fields.Name.toLowerCase()}
              </h4>
              <div className="project-icon-container">
                {hasGithubLink ? (
                  <a
                    className="project-link-icon"
                    href={project.fields["Repo Link"]}
                  >
                    <i className="fa-solid fa-globe"></i>
                  </a>
                ) : (
                  <></>
                )}
                {hasHostedLink ? (
                  <a
                    className="project-link-icon"
                    href={project.fields["Hosted Link"]}
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <p className="project-desc">{project.fields.Description}</p>
          </Project>
        );
      })}
      {projects["2021"].length > 0 ? <h4 className="year">- 2021 -</h4> : <></>}
      {projects["2021"].map((project: any) => {
        const hasGithubLink = project.fields["Repo Link"];
        const hasHostedLink = project.fields["Hosted Link"];
        return (
          <Project>
            <div className="project-header">
              <h4 className="project-name">
                {project.fields.Name.toLowerCase()}
              </h4>
              <div className="project-icon-container">
                {hasGithubLink ? (
                  <a
                    className="project-link-icon"
                    href={project.fields["Repo Link"]}
                  >
                    <i className="fa-solid fa-globe"></i>
                  </a>
                ) : (
                  <></>
                )}
                {hasHostedLink ? (
                  <a
                    className="project-link-icon"
                    href={project.fields["Hosted Link"]}
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <p className="project-desc">{project.fields.Description}</p>
          </Project>
        );
      })}
      {projects["2020"].length > 0 ? <h4 className="year">- 2020 -</h4> : <></>}
      {projects["2020"].map((project: any) => {
        const hasGithubLink = project.fields["Repo Link"];
        const hasHostedLink = project.fields["Hosted Link"];
        return (
          <Project>
            <div className="project-header">
              <h4 className="project-name">
                {project.fields.Name.toLowerCase()}
              </h4>
              <div className="project-icon-container">
                {hasGithubLink ? (
                  <a
                    className="project-link-icon"
                    href={project.fields["Repo Link"]}
                  >
                    <i className="fa-solid fa-globe"></i>
                  </a>
                ) : (
                  <></>
                )}
                {hasHostedLink ? (
                  <a
                    className="project-link-icon"
                    href={project.fields["Hosted Link"]}
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <p className="project-desc">{project.fields.Description}</p>
          </Project>
        );
      })}
      {projects["2019"].length > 0 ? <h4 className="year">- 2019 -</h4> : <></>}

      {projects["2019"].map((project: any) => {
        const hasGithubLink = project.fields["Repo Link"];
        const hasHostedLink = project.fields["Hosted Link"];
        return (
          <Project>
            <div className="project-header">
              <h4 className="project-name">
                {project.fields.Name.toLowerCase()}
              </h4>
              <div className="project-icon-container">
                {hasGithubLink ? (
                  <a
                    className="project-link-icon"
                    href={project.fields["Repo Link"]}
                  >
                    <i className="fa-solid fa-globe"></i>
                  </a>
                ) : (
                  <></>
                )}
                {hasHostedLink ? (
                  <a
                    className="project-link-icon"
                    href={project.fields["Hosted Link"]}
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <p className="project-desc">{project.fields.Description}</p>
          </Project>
        );
      })}
      <div id="mobile-social-button-container">
        <Email />
        <SocialButtonContainer />
      </div>
      <p id="credit-footer">© 2023 Teyah Brennen-Davies</p>
      {/* <p id="sparkle-icon">✨</p> */}
    </div>
  );
}

export default ScrollContainer;
