import { useEffect, useState } from 'react'
import Nav from "./Components/Nav"
import Home from "./Components/Home"
import Exprerince from "./Components/Exprerince"
import Skill from "./Components/Skill"
import Project from "./Components/Project"
import Contact from "./Components/Contact"
import Footer from './Components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
function App() {
  const [count, setCount] = useState(0)
useEffect(()=>{
Aos.init();

},[]) 

  return (
    <>
   <Nav />
   <div className="container">
   <Home />
  <Exprerince />
  <Skill />
  <Project />
  <Contact/>
 

   </div>
   <Footer/>
    </>
  )
}

export default App
