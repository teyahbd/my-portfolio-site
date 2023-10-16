import { ReactNode } from "react";
import "./styles.css";

interface ProjectProps {
  children: ReactNode;
}

function Project({ children }: ProjectProps) {
  return <article className="project">{children}</article>;
}

export default Project;
