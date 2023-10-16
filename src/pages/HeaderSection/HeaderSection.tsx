import { Info } from "../../App";
import IntroParagraph from "../../atoms/IntroParagraph/IntroParagraph";
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
        <h1>{props.info.name ?? "Teyah"}</h1>
        <h2>{(props.info.job_title ?? "software engineer").toLowerCase()}</h2>
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
