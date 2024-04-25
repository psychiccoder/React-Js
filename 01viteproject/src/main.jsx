import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp() {
  return (
    <>
      <h1>Myapp</h1>
    </>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: 'blank'
//   },
//   children: 'Click me to visit google'

// }






// const anotherElement = (
//   <a href="https:google.com" target='_blank'> Visist Google</a>
//   )

// const reactElemet = React.createElement(
//   'a',
//   { href: 'https://google.com', target: '_blank' },
//   'click me to visit google',
// )


ReactDOM.createRoot(document.getElementById('root')).render(


  // MyApp()   can write 

  // <MyApp/>
  // ReactElement  // not proper syntax
  // anotherElement
  // reactElemet

  <App/>

)
