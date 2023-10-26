import "./styles.css";

interface StackAndOrFilterProps {
  isAnd: boolean;
  setIsAnd;
}

function StackAndOrFilter({ isAnd, setIsAnd }: StackAndOrFilterProps) {
  function handleChange(event) {
    setIsAnd(event.target.value === "and" ? true : false);
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
      <label for="and">AND</label>
      <input
        type="radio"
        id="or"
        value="or"
        onChange={handleChange}
        checked={!isAnd}
      />
      <label for="or">OR</label>
    </>
  );
}

export default StackAndOrFilter;
