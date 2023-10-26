import { useEffect, useState } from "react";
import "./App.css";
import { fetchDescription, fetchInfo, fetchProjects } from "./api";
import HeaderSection from "./pages/HeaderSection/HeaderSection";
import ScrollContainer from "./pages/ScrollContainer/ScrollContainer";

const introRecordId = import.meta.env.VITE_INTRO_RECORD_ID;

// TODO: add timeout or error page

export interface Info {
  name: string | undefined;
  job_title: string | undefined;
  linkedin_profile_url: string | undefined;
  github_profile_url: string | undefined;
  email: string | undefined;
}

export interface ProjectFields {
  name?: string;
  description?: string;
  hosted_link?: string;
  repo_link?: string;
  year?: number;
  stack?: string[];
}

export interface Project {
  id: string;
  createdTime: string;
  fields: ProjectFields;
}

function App() {
  const emptyProjects: ProjectFields[] = [];
  const [personalInfo, setPersonalInfo] = useState({
    name: undefined,
    job_title: undefined,
    linkedin_profile_url: undefined,
    github_profile_url: undefined,
    email: undefined,
  });
  const [isLoading, setIsLoading] = useState(true);
  // loading
  const [projects, setProjects] = useState(emptyProjects);
  const [intro, setIntro] = useState("");
  const [stack, setStack] = useState([]);
  useEffect(() => {
    fetchProjects().then((projects) => {
      const projectInfo: ProjectFields[] = [];
      const projectStack: string[] = [];
      projects.forEach((project: Project) => {
        projectInfo.push(project.fields);
        if (project.fields.stack) {
          project.fields.stack.forEach((stack) => {
            if (!projectStack.includes(stack)) projectStack.push(stack);
          });
        }
      });

      setProjects(projectInfo);
      setStack(projectStack);
      // TODO: catch errors
    });
    fetchInfo().then((info) => {
      const infoObj: Info = {};
      info.forEach((item) => {
        infoObj[item.fields.name] = item.fields.value;
      });
      setPersonalInfo(infoObj);
    });
    fetchDescription(introRecordId).then((intro) => {
      setIntro(intro.fields.description);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {/* <OmbreCircle /> */}
      <div id="page-background"></div>
      {isLoading ? (
        <></>
      ) : (
        <div id="main-page">
          <HeaderSection info={personalInfo} intro={intro} />
          <ScrollContainer
            projects={projects}
            intro={intro}
            info={personalInfo}
            stack={stack}
          />
        </div>
      )}
    </>
  );
}

export default App;
