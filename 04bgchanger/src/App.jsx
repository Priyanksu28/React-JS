import { useState } from "react"

function App() {
  let [color, setColor] = useState("olive")

  return (
    
      <div className="w-full h-screen duration-200"
      style = {{backgroundColor: color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button onClick={() => setColor("red")}
            className=" px-4 py-1 rounded-full text-white shadow-lg border-4 border-black p-4"
            style={{backgroundColor: "red"}}>
              Red
            </button>
            <button onClick={() => setColor("black")}
            className=" px-4 py-1 rounded-full text-white shadow-lg border-4 border-black p-4"
            style={{backgroundColor: "black"}}>
              Black
            </button>
            <button onClick={() => setColor("green")}
            className=" px-4 py-1 rounded-full text-white shadow-lg border-4 border-black p-4"
            style={{backgroundColor: "green"}}>
              Green
            </button>
            <button onClick={() => setColor("blue")}
            className=" px-4 py-1 rounded-full text-white shadow-lg border-4 border-black p-4"
            style={{backgroundColor: "blue"}}>
              Blue
            </button>
            <button onClick={() => setColor("pink")}
            className=" px-4 py-1 rounded-full text-white shadow-lg border-4 border-black p-4"
            style={{backgroundColor: "pink"}}>
              Pink
            </button>
            <button onClick={() => setColor("brown")}
            className=" px-4 py-1 rounded-full text-white shadow-lg border-4 border-black p-4"
            style={{backgroundColor: "brown"}}>
              Brown
            </button>
          </div>
            
        </div>      
      </div>
    
  )
}

export default App
