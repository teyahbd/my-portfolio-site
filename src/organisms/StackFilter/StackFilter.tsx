import StackButton from "../../atoms/StackButton/StackButton";
import { ProjectFields } from "../../data/projects";
import "./styles.css";

interface StackFilterProps {
  stack: string[];
  selectedStack: string | null;
  setSelectedStack: React.Dispatch<React.SetStateAction<string | null>>;
  setDisplayedProjects: React.Dispatch<React.SetStateAction<ProjectFields[]>>;
}

function StackFilter({
  stack,
  selectedStack,
  setSelectedStack,
  setDisplayedProjects,
}: StackFilterProps) {
  return (
    <div id="stack-filter">
      <div id="stack-button-container">
        {stack.map((item, index) => {
          return (
            <StackButton
              text={item}
              selectedStack={selectedStack}
              setSelectedStack={setSelectedStack}
              setDisplayedProjects={setDisplayedProjects}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default StackFilter;
