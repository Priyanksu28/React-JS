import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Chai from "./component"


// function MyApp() {
//     return (
//         <h1>Custom App | Hi</h1>
//     )
// }

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click here'
// }

// const anotherElement = React.createElement (
//     'a',
//     {href:'//google.com', target: '_blank'},
//     'click me to visit google'
// )
const aU = " chai"

const CReact = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'Click Here',
    aU
)

createRoot(document.getElementById('root')).render(
   
    CReact

    
    // anotherElement
  
)
