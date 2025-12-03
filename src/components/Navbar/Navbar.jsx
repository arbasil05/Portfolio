import './Navbar.css'
import { motion } from 'motion/react'

const Navbar = () => {
  return (
    <div className='Navbar-Container'>
      <div>
        <h1 className='Page-Header'><span className='Pencil-Color'>BASIL'S</span> NOTEBOOK</h1>
      </div>
      <div>
        <ul className='Navbar-Links Pencil-Color'>
          <motion.li className='Highlighter' initial={{ backgroundSize: "0% 100%" }}
            whileHover={{ backgroundSize: "100% 100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}><a href="#Me" style={{ textDecoration: "none", padding: "5px" }}>Me</a></motion.li>
          <motion.li className='Highlighter' initial={{ backgroundSize: "0% 100%" }}
            whileHover={{ backgroundSize: "100% 100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true }} ><a href="#skillz">Skillz</a></motion.li>
          <motion.li className='Highlighter' initial={{ backgroundSize: "0% 100%" }}
            whileHover={{ backgroundSize: "100% 100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}><a href="#contact">Hello!</a></motion.li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
