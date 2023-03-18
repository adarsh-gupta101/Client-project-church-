import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import HomeScreen from './components/HomeScreen'
import Banner from './components/Promotion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Banner />

<HomeScreen/>      
    </div>
  )
}

export default App
