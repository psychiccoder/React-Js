import { useState } from "react";

import "./App.css"


function App() {

  // let counter = 10;
  const [counter, setCounter] = useState(10)
  function addValue() {
    // counter++;
    setCounter(counter + 1)

  }
  const removeValue = () => {
    if (counter > 0) {
      // counter--;
      setCounter(counter - 1)
    }
  }



  return (
    <>
      <h1>Learning Hooks</h1>
      <h2>Set Counter: {counter}</h2>
      <button
        onClick={addValue}>Add Value: {counter}</button>
      <br />
      <button
        onClick={removeValue}>Remove Value: {counter}</button>
      <p>Footer: {counter}</p>

    </>
  )
}


export default App

