
import { useState } from 'react'
// import './App.css'

function App() {
  const [color, setColor] = useState('white')

  return (

    <div className="w-screen h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      {/* <h1>Hello</h1> */}
      <h1 class="  text-4xl font-bold text-center mt-8"
        style={{ backgroundColor: "tomato" }}>All Rainbow Color</h1>


      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"
        style={{ backgroundColor: color }}>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-amber-200 px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("violet")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "violet" }}
          >violet</button>
          <button
            onClick={() => setColor("indigo")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "indigo" }}
          >Indigo</button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >Blue</button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >green</button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >Yellow</button>
          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orange" }}
          >orange</button>
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >red</button>

        </div>
      </div>
    </div >
  )
}

export default App
