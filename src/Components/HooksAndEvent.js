import React, { useState } from "react";

const HooksAndEvent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    alert(`State of count ${count}`);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const sayWelcome = (message) => {
    alert(`message invoke ${message}`);
  };

  const clickMe = (message) => {
    alert(message);
  };

  return (
    <>
      <p>Counter: {count}</p>
      <div>
        <button className="btn btn-info me-3 h3 col-3" onClick={increment}>
          Increment
        </button>
      </div>
      <div>
        <button className="btn btn-info me-3 h3 col-3" onClick={decrement}>
          Decrement
        </button>
      </div>
      <div>
        <button
          className="btn btn-info me-3 h3 col-3"
          onClick={() => sayWelcome("welcome")}
        >
          Say Welcome
        </button>
      </div>
      <div>
        <input
          className="btn btn-info me-3 h3 col-3"
          type="submit"
          value="Click on me"
          onKeyPress={() => clickMe("I was clicked")}
        ></input>
      </div>
    </>
  );
};

export default HooksAndEvent;
