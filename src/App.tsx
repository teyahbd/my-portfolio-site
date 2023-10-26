import { useEffect, useState } from "react";
import "./App.css";
import { fetchDescription, fetchInfo, fetchProjects } from "./api";
import HeaderSection from "./pages/HeaderSection/HeaderSection";
import ScrollContainer from "./pages/ScrollContainer/ScrollContainer";

const introRecordId = import.meta.env.VITE_INTRO_RECORD_ID;

// TODO: add timeout or error page

interface Fields {
  name: string;
  value: string;
}

interface InfoTableItem {
  createdTime: string;
  id: string;
  fields: Fields;
}

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
  order: number;
}

export interface Project {
  id: string;
  createdTime: string;
  fields: ProjectFields;
}

function App() {
  const emptyProjects: ProjectFields[] = [];
  const [personalInfo, setPersonalInfo] = useState<Info>({
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
  useEffect(() => {
    fetchProjects()
      .then((projects) => {
        projects.sort(
          (a: Project, b: Project) => a.fields.order - b.fields.order,
        );
        const projectInfo: ProjectFields[] = [];
        projects.forEach((project: Project) => {
          projectInfo.push(project.fields);
        });

        setProjects(projectInfo);
        // TODO: catch errors
      })
      .then(() => fetchInfo())
      .then((info) => {
        const infoObj: Info = {
          name: "",
          job_title: "",
          linkedin_profile_url: "",
          github_profile_url: "",
          email: "",
        };
        info.forEach((item: InfoTableItem) => {
          infoObj[item.fields.name as keyof Info] = item.fields.value;
        });
        setPersonalInfo(infoObj);
      })
      .then(() => fetchDescription(introRecordId))
      .then((intro) => {
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
          />
        </div>
      )}
    </>
  );
}

export default App;
