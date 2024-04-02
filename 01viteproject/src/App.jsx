import New from "./New"


function App() {

  let num = prompt("What is your favorite number? ");



  return (

    <>
      <p>Before New App {num}</p>
      <New />
      <p>After New App {num}</p>
    </>
  )
}

export default App
