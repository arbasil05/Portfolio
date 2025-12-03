import './App.css'
import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Project from './components/Projects/Project'
import Skills from './components/Skills/Skills'

function App() {
  // const containerRef = useRef(null);


  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start start", "end end"] 
  // });

  // // 3. (Optional) Add a spring to smooth the animation (like GSAP scrub: 1)
  // const pathLength = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001
  // });

  return (
    <>
      <Navbar />
      
      {/* <div ref={containerRef} className="svg">
        <svg 
          viewBox="0 0 1404 3133" 
          preserveAspectRatio="xMidYMid meet"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >

          <motion.path 
            d="M75.4579 0.107056C71.4579 93.4404 46.058 361.307 272.458 398.107C272.458 398.107 998.458 398.107 1183.96 398.107C1369.46 398.107 1415.66 824.407 968.459 845.607C968.459 845.607 498.458 829.107 216.458 862.607C-65.5421 896.107 -81.0421 1391.11 243.458 1397.61C567.958 1404.11 993.784 1397.61 1229.46 1397.61C1436.46 1397.61 1467.42 1924.26 1257.96 1932.61C944.458 1945.11 536.458 1932.61 186.458 1932.61C-51.5666 1932.61 -0.0420837 2578.11 164.458 2578.11C590.458 2578.11 623.142 2585.15 941.458 2597.11C1360.96 2612.87 1226.96 3132.11 1226.96 3132.11" 
            stroke="#FF0000" 
            strokeWidth="2"
            
           
            style={{ pathLength }} 
          />
        </svg>
      </div> */}

      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App