import StackAndOrToggle from "../../atoms/StackAndOrToggle/StackAndOrToggle";
import StackButton from "../../atoms/StackButton/StackButton";
import "./styles.css";

interface StackFilterProps {
  stack: string[];
  selectedStack: string[];
  setSelectedStack: React.Dispatch<React.SetStateAction<string[]>>;
  isAnd: boolean;
  setIsAnd: React.Dispatch<React.SetStateAction<boolean>>;
  displayedProjectsStacks: string[];
}

function StackFilter({
  stack,
  selectedStack,
  setSelectedStack,
  isAnd,
  setIsAnd,
  displayedProjectsStacks,
}: StackFilterProps) {
  return (
    <div id="stack-filter">
      <div id="stack-filter-options">
        {/* {selectedStack.length > 0 ? ( */}
        <>
          <h3>Filter</h3>
          <StackAndOrToggle
            isAnd={isAnd}
            setIsAnd={setIsAnd}
            setSelectedStack={setSelectedStack}
          />
        </>
        {/* ) : (
          <></>
        )} */}
      </div>
      <div id="stack-button-container">
        {stack.map((item) => {
          return (
            <StackButton
              text={item}
              selectedStack={selectedStack}
              setSelectedStack={setSelectedStack}
              displayedProjectsStacks={displayedProjectsStacks}
              isAnd={isAnd}
            />
          );
        })}
      </div>
    </div>
  );
}

export default StackFilter;
