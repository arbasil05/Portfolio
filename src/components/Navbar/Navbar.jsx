import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar-Container'>
      <div>
        <h1 className='Page-Header'><span className='Pencil-Color'>BASIL'S</span> NOTEBOOK</h1>
      </div>
      <div>
        <ul className='Navbar-Links Pencil-Color'>
          <li><a href="#Me" style={{ textDecoration: "none" }}>Me</a></li>
          <li><a href="#skillz">Skillz</a></li>
          <li><a href="#contact">Hello!</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
