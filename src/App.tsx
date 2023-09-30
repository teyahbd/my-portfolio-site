import { useEffect, useState } from "react";
import "./App.css";
import ScrollContainer from "./organisms/ScrollContainer/ScrollContainer";
import StaticInfo from "./organisms/HeaderSection/HeaderSection";
import { fetchDescription, fetchInfo, fetchProjects } from "./api";

const introRecordId = import.meta.env.VITE_INTRO_RECORD_ID;

// TODO: add timeout or error page
function App() {
  const [personalInfo, setPersonalInfo] = useState({});
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
      const infoObj: { [key: string]: string } = {};
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
          <StaticInfo info={personalInfo} />
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
