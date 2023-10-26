import "./styles.css";

interface StackButton {
  text: string;
  selectedStack: string[];
  setSelectedStack;
}

function StackButton({ text, selectedStack, setSelectedStack }: StackButton) {
  function handleClick(event) {
    event?.preventDefault();
    const newValue = event.target.textContent;
    let newStackArray = [...selectedStack];

    if (selectedStack.includes(newValue)) {
      newStackArray = newStackArray.filter((stack) => stack !== newValue);
    } else {
      newStackArray.push(newValue);
    }
    setSelectedStack(newStackArray);
  }
  return (
    <button
      className={`stack-button ${
        selectedStack.includes(text) ? "stack-button-selected" : ""
      }`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default StackButton;
