import { ReactNode } from "react";
import "./styles.css";

interface ProjectProps {
  index: number;
  children: ReactNode;
}

function Project({ children, index }: ProjectProps) {
  return (
    <article className="project" key={index}>
      {children}
    </article>
  );
}

export default Project;
