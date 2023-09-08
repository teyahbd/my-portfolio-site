import ExperienceBox from "../../molecules/ExperienceBox/ExperienceBox";
import "./styles.css";

function ExperienceBoxContainer() {
  return (
    <div id="experience-box-container">
      <ExperienceBox>
        <span className="fa-solid fa-code"></span>
        <h2>Software Engineer</h2>
        <p>
          I'm a totally sick software engineer who knows Typescript, React,
          Backend stuff too!
        </p>
      </ExperienceBox>
      <ExperienceBox>
        <span className="fa-solid fa-cloud"></span>
        <h2>Data Enthusiast</h2>
        <p>I have experience using AWS and Azure and python and stuff!</p>
      </ExperienceBox>
      <ExperienceBox>
        <span className="fa-solid fa-atom"></span>
        <h2>Physics Whizz</h2>
        <p>
          I have a physics degree and computational modelling experience and I'm
          really super smart
        </p>
      </ExperienceBox>
    </div>
  );
}

export default ExperienceBoxContainer;
