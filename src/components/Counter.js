import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);

  function increase() {
    setNumber(number + 1);
  }

  function decrease() {
    if (number !== 0) {
      setNumber(number - 1);
    }
  }

  function handleChange(e) {
    if (e.target.value >= 0) {
      setNumber(e.target.value);
    }
  }

  console.log("number", number);

  return (
    <div>
      <h1>Count: {number}</h1>
      {/* <button type="button" onClick={decrease}>
        Decrease
      </button>
      <button type="button" onClick={increase}>
        Increase
      </button> */}
      <input
        type="number"
        value={number}
        onChange={(e) => handleChange(e)}
        placeholder="0"
      />
    </div>
  );
};

export default Counter;
