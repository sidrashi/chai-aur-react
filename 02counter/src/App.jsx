import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(10);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const subValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>counter: {counter}</h2>
      <button onClick={addValue}>Add Value {counter} </button>
      <br />
      <button onClick={subValue}>Subtract Value {counter} </button>
      <p>footer: {counter} </p>
    </>
  );
}

export default App;
