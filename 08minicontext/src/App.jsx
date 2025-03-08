import React, {useState} from 'react'
import './App.css'
import Login from './Component/Login'
import Profile from './Component/Profile'
import UserContext from './Context/UserContext'
// import UserContextProvider from './Context/UserContextProvider'

function App() {
  const [user, setUser] = useState(null)
  

  return (
    <UserContext.Provider value = {{user, setUser}}>
      <div>
      <Login/>
      <Profile/>
      </div>
      
    </UserContext.Provider>
  )    
}

export default App
