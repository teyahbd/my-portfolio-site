import StackAndOrToggle from "../../atoms/StackAndOrToggle/StackAndOrToggle";
import StackButton from "../../atoms/StackButton/StackButton";
import "./styles.css";

interface StackFilterProps {
  stack: string[];
  selectedStack: string[];
  setSelectedStack;
  isAnd: boolean;
  setIsAnd;
}

function StackFilter({
  stack,
  selectedStack,
  setSelectedStack,
  isAnd,
  setIsAnd,
}: StackFilterProps) {
  return (
    <div id="stack-filter">
      {selectedStack.length > 0 ? (
        <div id="stack-filter-options">
          <h3>Filter</h3>
          <StackAndOrToggle isAnd={isAnd} setIsAnd={setIsAnd} />
        </div>
      ) : (
        <></>
      )}
      <div id="stack-button-container">
        {stack.map((item) => {
          return (
            <StackButton
              text={item}
              selectedStack={selectedStack}
              setSelectedStack={setSelectedStack}
            />
          );
        })}
      </div>
    </div>
  );
}

export default StackFilter;
