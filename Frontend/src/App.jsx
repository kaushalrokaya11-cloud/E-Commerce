import { useState } from 'react'
import { NavBar } from './Components/NavBar/NavBar.jsx'
import MainSection from './Components/MainSection/MainSection.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>    
    <div className="app">
     <NavBar/>
     <MainSection/>
    </div>
    </>
  )
}

export default App
