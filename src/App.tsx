import { useEffect, useState } from "react";
import "./App.css";
import HeaderSection from "./pages/HeaderSection/HeaderSection";
import ScrollContainer from "./pages/ScrollContainer/ScrollContainer";
import { Info, getInfo } from "./data/info";
import { getIntro } from "./data/intro";
import { ProjectFields, getProjects } from "./data/projects";

// TODO: add timeout or error page

function App() {
  const emptyProjects: ProjectFields[] = [];
  const [personalInfo, setPersonalInfo] = useState<Info>({
    name: undefined,
    job_title: undefined,
    linkedin_profile_url: undefined,
    github_profile_url: undefined,
    email: undefined,
  });
  const [projects, setProjects] = useState(emptyProjects);
  const [intro, setIntro] = useState("");
  useEffect(() => {
    const info = getInfo();
    const intro = getIntro();
    const projects = getProjects();

    setPersonalInfo(info);
    setIntro(intro);
    setProjects(projects);
  }, []);

  return (
    <>
      {/* <OmbreCircle /> */}
      <div id="page-background"></div>
      {
        <div id="main-page">
          <HeaderSection info={personalInfo} intro={intro} />
          <ScrollContainer
            projects={projects}
            intro={intro}
            info={personalInfo}
          />
        </div>
      }
    </>
  );
}

export default App;
