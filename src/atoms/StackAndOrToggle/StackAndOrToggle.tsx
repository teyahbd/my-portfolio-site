import "./styles.css";

interface StackAndOrFilterProps {
  isAnd: boolean;
  setIsAnd: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedStack: React.Dispatch<React.SetStateAction<string[]>>;
}

function StackAndOrFilter({
  isAnd,
  setIsAnd,
  setSelectedStack,
}: StackAndOrFilterProps) {
  function handleChange(event: React.ChangeEvent) {
    setIsAnd((event.target as HTMLInputElement).value === "and" ? true : false);
    setSelectedStack([]);
  }
  return (
    <>
      <input
        type="radio"
        id="and"
        value="and"
        onChange={handleChange}
        checked={isAnd}
      />
      <label htmlFor="and">AND</label>
      <input
        type="radio"
        id="or"
        value="or"
        onChange={handleChange}
        checked={!isAnd}
      />
      <label htmlFor="or">OR</label>
    </>
  );
}

export default StackAndOrFilter;
