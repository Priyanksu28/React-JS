import { useEffect, useState } from "react";
import "./App.css";
import { Themeprovider } from "./Context/Theme";
import ThemeBtn from "./Component/ThemeBtn";
import Card from "./Component/Card";

function App() {
  const [thememode, setthememode] = useState("light")

  const darktheme = () => {

    setthememode("dark")
  }

  const lighttheme = () => {
    setthememode("light")
  }

  // actual change in theme

  useEffect (() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(thememode)
  }, [thememode])

  return (
    <Themeprovider value = {{thememode, darktheme, lighttheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn/>
        </div>
          
        <div className="w-full max-w-sm mx-auto">
          <Card/>
        </div>
      </div>
    </div>
    </Themeprovider>

    
  );
}

export default App;
