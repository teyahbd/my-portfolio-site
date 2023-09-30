import { useEffect, useState } from "react";
import "./App.css";
import ScrollContainer from "./organisms/ScrollContainer/ScrollContainer";
import StaticInfo from "./organisms/StaticInfo/StaticInfo";
import { fetchDescription, fetchProjects } from "./api";

const introRecordId = import.meta.env.VITE_INTRO_RECORD_ID;

// TODO: add timeout or error page
function App() {
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
        const year = project.fields.Year;
        const currentValues = projectYears[year] ?? null;
        if (currentValues) {
          projectYears[year] = [...currentValues, project];
        }
      });
      console.log(projectYears);
      setProjects(projectYears);
      // TODO: catch errors
    });
    fetchDescription(introRecordId).then((intro) => {
      setIntro(intro.fields.Description);
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
          <StaticInfo />
          <ScrollContainer projects={projects} intro={intro} />
        </div>
      )}
    </>
  );
}

export default App;
