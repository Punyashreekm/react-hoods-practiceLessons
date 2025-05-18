import { useEffect, useState } from "react";
import HooksExample from "./components/hook-example";
import DataFetcher from "./components/hook-example2";

function App() {
  // EXAMPLE FOR useState()
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    console.log("rerendered");
  }, [count]);

  return (
    <>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
      <br />
      <br />

      {/*  CONTROLLED INPUT */}
      <div>
        <input
          type="text"
          placeholder="Enter Something"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <h4>
          You Typed : <strong>{inputValue}</strong>{" "}
        </h4>

        {toggle && <HooksExample />}
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
      </div>
      <br />
      <br />
      <DataFetcher />
    </>
  );
}
export default App;
