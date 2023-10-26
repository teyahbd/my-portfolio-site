import "./styles.css";

interface StackButton {
  text: string;
  selectedStack: string[];
  setSelectedStack: React.Dispatch<React.SetStateAction<string[]>>;
  displayedProjectsStacks: string[];
  isAnd: boolean;
}

function StackButton({
  text,
  selectedStack,
  setSelectedStack,
  displayedProjectsStacks,
  isAnd,
}: StackButton) {
  const isSelected = selectedStack.includes(text);
  const isDisabled =
    !displayedProjectsStacks.includes(text) &&
    !isSelected &&
    selectedStack.length !== 0 &&
    isAnd;
  function handleClick(event: React.MouseEvent) {
    event?.preventDefault();
    const newValue = (event.target as HTMLElement).textContent;
    let newStackArray = [...selectedStack];

    if (newValue && selectedStack.includes(newValue)) {
      newStackArray = newStackArray.filter((stack) => stack !== newValue);
    } else if (newValue) {
      newStackArray.push(newValue);
    }
    setSelectedStack(newStackArray);
  }
  return (
    <button
      className={`stack-button ${isSelected ? "stack-button-selected" : ""} ${
        isDisabled ? "stack-button-disabled" : ""
      }`}
      disabled={isDisabled}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default StackButton;
