import { useState } from 'react'
import './App.css'
import './components/Home.jsx'
import Home from './components/Home.jsx'
import Header from './components/Header.jsx'
import Contact from './components/Contact.jsx'
import Reference from './components/Reference.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home />
      <Contact />
      <Reference />
      <Footer />
    </>
  )
}

export default App
