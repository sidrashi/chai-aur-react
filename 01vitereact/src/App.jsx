import { useState } from "react";

function App() {
  const arr = [
    "apple",
    "banana",
    "orange",
    "pineapple",
    "guava",
    "chiku",
    "grapes",
  ];
  const [input, setInput] = useState("");
  const filter = arr.filter((item) => (item.includes(input)))
  

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {filter.map((item) => (
        <li>{item}</li>
      ))}
    </>
  );
}

export default App;
