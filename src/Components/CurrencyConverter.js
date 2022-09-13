import { useState } from "react";

const CurrencyConverter = () => {
  const [val, setVal] = useState(0);
  const usd = 0.018;
  const handleSubmit = (event) => {
    setVal(event.target.value);
  };
  const logValue = (event) => {
    event.preventDefault();
    alert(`${val} PHP -> USD =` + (val * usd).toFixed(2));
  };
  return (
    <div className="d-flex flex-column">
      Amount: <input type="number" onChange={handleSubmit} />
      Currency:{" "}
      <textarea
        value="1 Philippine peso = 0.018 United States Dollar"
        onChange={() => console.log("PHP to USD")}
      />
      <div>
        <button className="btn btn-info mt-4" onClick={logValue}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default CurrencyConverter;
