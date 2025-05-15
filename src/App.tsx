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
  const [intro, setIntro] = useState([] as string[]);
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

  useEffect(() => {
    const info = getInfo();
    const intro = getIntro();
    const projects = getProjects();

    setPersonalInfo(info);
    setIntro(intro);
    setProjects(projects);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty("--primary-background-color", "#171d3a");
      root.style.setProperty("--tertiary-font-color", "#fef2f5");
    } else {
      root.style.setProperty("--primary-background-color", "#fef2f5");
      root.style.setProperty("--tertiary-font-color", "#3b4993");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    const icon = document.querySelector("#theme-toggle i");
    if (icon) {
      icon.classList.add("fade-out");
      setTimeout(() => {
        setIsDarkMode((prevMode) => !prevMode);
        icon.classList.remove("fade-out");
      }, 300); // Match the transition duration in CSS
    }
  };
  return (
    <>
      {/* <OmbreCircle /> */}
      <div id="page-background"></div>
      <button id="theme-toggle" onClick={toggleTheme}>
        <i className={isDarkMode ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
      </button>
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
