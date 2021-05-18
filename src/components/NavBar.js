import {Navbar, Nav} from "react-bootstrap";
import '../App.css';


const NavBar = () => {
  return(
    <div style={{width: '500px', textShadow: '2px 1px white'}}>
      <Navbar className="nav-class" bg="green" fixed="top" style={{width: '650px', padding: '10px', margin: '10px', color: 'white !important', textDecoration: 'underline', marginLeft: '25px'}}> 
      {/* can change from fixed to ^^^sticky on bootstrap website for navbar  */}
        <Navbar.Brand href="/" style={{fontSize: '2rem', textShadow: '1px 1px white !important'}}>Jedediah Wood</Navbar.Brand> 
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className='navclass'>
            <Nav.Link href="/about" >About Me</Nav.Link>
            <Nav.Link href="/projects">My Projects</Nav.Link>
            <Nav.Link href="/contact">Contact Me</Nav.Link>
          </Nav>
        {/* </Navbar.Collapse> */}
      </Navbar>
    </div>
  )
}

export default NavBar


// deleted from import: Form, FormControl
// deleted from first nav bar tag