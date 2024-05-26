import IntroParagraph from "../../atoms/IntroParagraph/IntroParagraph";
import SkillContainer from "../../atoms/SkillContainer/SkillContainer";
import { Info } from "../../data/info";
import ContactFooter from "../../organisms/ContactFooter/ContactFooter";
import "./styles.css";

interface HeaderSection {
  info: Info;
  intro: string[];
}

const MODE = import.meta.env.MODE;

function HeaderSection(props: HeaderSection) {
  const imagePath =
    MODE === "development"
      ? "/src/assets/img/girl.png"
      : "/assets/girl-d56b0942.png";

  console.log(imagePath);

  return (
    <header className="fade-in-quick">
      <div id="name-title-container">
        <h1 className="name">{props.info.name ?? "Teyah"}</h1>
        <span id="title-container" className="web-only">
          {props.info.job_title ?? "software engineer"}
        </span>
        <span className="title mobile-only">
          {props.info.job_title ?? "software engineer"}
        </span>
        <SkillContainer />
      </div>
      <ContactFooter
        email={props.info.email ?? ""}
        info={props.info}
        forMobile={false}
      />
      <IntroParagraph text={props.intro ?? "Teyah"} forMobile={true} />
    </header>
  );
}

export default HeaderSection;
