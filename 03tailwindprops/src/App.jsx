import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  let Obj = {
    name: "Sid",
    age: 29
  }
  let newArr = [1,2,3]

  return (
    <>
      <h1 className="bg-green-400 text-black mb-4">Tailwind test</h1>
      <Card channel="chaiaurcode" btnText="Click me" />
      <Card channel="Sid" btnText="Push me" />
    </>
  );
}

export default App;
