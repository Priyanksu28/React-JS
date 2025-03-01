import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'  

function App() {

  let myObj = {
    username: "priya",
    age: 23
  }
  let newArr = [1, 2, 3, 4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl gap-40 mb-5'>
        Tailwind CSS
      </h1>
      
      <Card username = "props displayed" sameobj = {myObj} arrobj = {newArr} btnText = '4.0'/>
      <Card username = "p" btnText = '4.4'/>
      <Card username = "aaaa" btnText = '4.2'/>
    </>
  )
}

export default App
