import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import HomeScreen from './components/HomeScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">

<HomeScreen/>      
    </div>
  )
}

export default App
