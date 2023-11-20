import IntroParagraph from "../../atoms/IntroParagraph/IntroParagraph";
import { Info } from "../../data/info";
import ContactFooter from "../../organisms/ContactFooter/ContactFooter";
import "./styles.css";

interface HeaderSection {
  info: Info;
  intro: string;
}

function HeaderSection(props: HeaderSection) {
  return (
    <header className="fade-in-quick">
      <div id="name-title-container">
        <h1 className="name">{props.info.name ?? "Teyah"}</h1>
        <span id="title-container" className="web-only">
          <img className="dev" src="./src/assets/img/girl.png" />
          {(props.info.job_title ?? "software engineer").toLowerCase()}
        </span>
        <img className="dev mobile-only" src="./src/assets/img/girl.png" />
        <span className="title mobile-only">
          {(props.info.job_title ?? "software engineer").toLowerCase()}
        </span>
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
