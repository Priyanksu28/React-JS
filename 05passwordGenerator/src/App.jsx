import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [number, setnumber] = useState(false)
  const [character, setcharacter] = useState(false)
  const [password, setpassword] = useState("")

  // useRef hook

  const passwordref = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number) str += "123456789"
    if (character) str += "~!@#$%^&*()_-+=`{}"

    for (let i = 0; i < length; i++) {  // ✅ Fix loop range
      let char = Math.floor(Math.random() * str.length); // ✅ Fix index generation
      pass += str.charAt(char)
    }

    setpassword(pass)

  }, [length, number, character])



  let copypass = () => {

    passwordref.current?.select();
    navigator.clipboard.writeText(password)
  }

  useEffect(() => {
    passwordGenerator()
  }, [length, number, character])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 mt-4">
          <input 
            type="text"
            value={password} 
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
          />

          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copypass}>
            Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setlength((e.target.value))} // ✅ Convert to number
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={number} // ✅ Use checked instead of defaultChecked
              id="numberInput"
              onChange={() => setnumber(prev => !prev)}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={character} // ✅ Use checked instead of defaultChecked
              id="characterInput"
              onChange={() => setcharacter(prev => !prev)}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
          {/* <div className="flex items-center gap-x-1">
            
            <button 
            onClick={passwordGenerator}>Generate</button>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default App
