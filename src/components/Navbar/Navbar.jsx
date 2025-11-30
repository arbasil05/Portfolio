import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar-Container'>
      <div>
        <h1 className='Page-Header'><span className='Pencil-Color'>BASIL'S</span> NOTEBOOK</h1>
      </div>
      <div>
        <ul className='Navbar-Links Pencil-Color'>
          <li>Me</li>
          <li>Skillz</li>
          <li>Hello!</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
