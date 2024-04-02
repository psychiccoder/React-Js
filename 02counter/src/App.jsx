import { useState } from "react";


function App() {

  // let counter = 10;
  let [counter, setCounter] = useState(10)
  function addValue() {
    counter++;
    setCounter(counter)
    console.log("Value Updated", Math.floor(Math.random() * 100));
  }
  const removeValue = () => {
    counter--;
    setCounter(counter)
    console.log("Value decrease", counter);
  }
  return (
    <>
      <h1>Learning Hooks</h1>
      <h2>Set Counter: {counter}</h2>
      <button
        onClick={addValue}>Add Value: {counter}</button>
      <button
        onClick={removeValue}>Remove Value: {counter}</button>
      <p>Footer: {counter}</p>

    </>
  )
}


export default App

