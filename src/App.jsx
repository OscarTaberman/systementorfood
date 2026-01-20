import { useState } from 'react'
import './App.css'
import './components/Home.jsx'
import Home from './components/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
    </>
  )
}

export default App
