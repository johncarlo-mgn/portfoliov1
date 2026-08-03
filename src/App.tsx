// import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col items-center font-mono">
        <div className="flex flex-col min-w-4xl max-w-4xl">
          <Nav/>
          <About />
          <Experience/>
          <Projects/>
        </div>
      </div>
    </>
  )
}

export default App
