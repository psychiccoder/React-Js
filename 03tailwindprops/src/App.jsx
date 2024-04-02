import './App.css'
import Card from './components/Card'
import SignIn from './components/SignIn'

function App() {
  let myobj = {
    age: 10,
    game: "Cricket"
  }

  let newArr = [10, 20, 20]

  return (
    <>
      <h1 className='bg-yellow-300 text-black p-5 rounded-xl mb-4'>Tailwind test</h1>
      {/* <Card type="Read" someObj={myobj} someArr={newArr} />
      <Card type="Study" />
      <Card type="Learn" /> */}
      <SignIn name="Twitter" name2="Instagram" start="Get started" />
      <SignIn name="Reddit" name2="Facebook" start="Let's start" />
      <SignIn name="Google" name2="Canva" start="Chaliye Shuru Karte Hain" />

    </>
  )
}

export default App
