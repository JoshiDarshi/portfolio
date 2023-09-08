import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Skill from './Components/Skills/Skill'
import Project from './Components/Projects/Project'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import About from './Components/About/About'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Skill/>
    <Project/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
