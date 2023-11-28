import { ProjectFields } from "../../data/projects";
import "./styles.css";

interface StackButton {
  text: string;
  selectedStack: string | null;
  setSelectedStack: React.Dispatch<React.SetStateAction<string | null>>;
  setDisplayedProjects: React.Dispatch<React.SetStateAction<ProjectFields[]>>;
}

function StackButton({
  text,
  selectedStack,
  setSelectedStack,
  setDisplayedProjects,
}: StackButton) {
  const isSelected = selectedStack === text;
  function handleClick(event: React.MouseEvent) {
    event?.preventDefault();
    setDisplayedProjects([]);

    const newValue = (event.target as HTMLElement).textContent;

    const selected = newValue === selectedStack ? null : newValue;

    setSelectedStack(selected);
  }
  return (
    <button
      className={`stack-button ${isSelected ? "stack-button-selected" : ""}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default StackButton;
