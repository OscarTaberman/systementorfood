import { useState } from 'react'
import './App.css'
import './components/Home.jsx'
import Home from './components/Home.jsx'
import Header from './components/Header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home />
    </>
  )
}

export default App
