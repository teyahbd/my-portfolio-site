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

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: undefined,
    job_title: undefined,
    linkedin_profile_url: undefined,
    github_profile_url: undefined,
    email: undefined,
  });
  const [isLoading, setIsLoading] = useState(true);
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
      const projectYears = {
        2023: [],
        2022: [],
        2021: [],
        2020: [],
        2019: [],
      };

      projects.forEach((project) => {
        const year = project.fields.year;
        const currentValues = projectYears[year] ?? null;
        if (currentValues) {
          projectYears[year] = [...currentValues, project];
        }
      });
      setProjects(projectYears);
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
      <div
        id="background-color"
        className={`fade-in-quick ${isLoading ? "loading-circle" : null}`}
      ></div>
      {isLoading ? (
        <></>
      ) : (
        <div id="main-page">
          <HeaderSection info={personalInfo} />
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
