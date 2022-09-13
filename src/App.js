import HooksAndEvent from "./Components/HooksAndEvent";
import CurrencyConverter from "./Components/CurrencyConverter";
import "./App.css";

function App() {
  return (
    <div className="App container">
      <div className="row justify-content-center">
        <div className="col d-flex justify-content-center flex-column">
          <HooksAndEvent />
          <CurrencyConverter />
        </div>
      </div>
    </div>
  );
}

export default App;
