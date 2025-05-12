import "./styles.css";
import { ProjectFields } from "../../data/projects";
import Link from "../../atoms/Link/Link";

interface ProjectProps {
  project: ProjectFields;
  index: number;
}

function Project({ project }: ProjectProps) {
  // const [isHovered, setIsHovered] = useState(false);
  // function handleHoverEnter() {
  //   setIsHovered(true);
  // }

  // function handleHoverLeave() {
  //   setIsHovered(false);
  // }

  return (
    <article
      className="project"
      // onMouseEnter={handleHoverEnter}
      // onMouseLeave={handleHoverLeave}
    >
      {/* {index !== 0 ? <hr className="separator" /> : <></>} */}
      <div className="project-header">
        <h4 className="project-name">
          {/* TODO: don't render icon if not available (also accessibility!) */}
          <span className={`${project.title.icon} name-icon`}></span>
          {`${project.title.name}, ${project.year}`}
        </h4>
      </div>
      {/* <p className="project-desc">
        {project.description &&
          project.description.split(" ").map((word) => {
            return project.stack &&
              project.stack.includes(word.toLowerCase()) ? (
              <>
                {" "}
                <span
                  className={`stack-word ${
                    isHovered && "stack-word-highlight"
                  }`}
                >
                  {word}
                </span>
              </>
            ) : (
              ` ${word}`
            );
          })}
      </p> */}
      <p className="project-desc">{project.description}</p>
      <div className="project-links">
        {project.links.map((link) => (
          <Link link={link} />
        ))}
      </div>
    </article>
  );
}

export default Project;
