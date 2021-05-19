import {Navbar, Nav} from "react-bootstrap";
import '../App.css';


const NavBar = () => {
  return(
    <div style={{backgroundColor: 'black !important'}}>
      <Navbar id="naveen" fixed="top"> 
      {/* can change from fixed to ^^^sticky on bootstrap website for navbar  */}
        <Navbar.Brand href="/" style={{fontSize: '2rem'}}>Jedediah Wood</Navbar.Brand> 
          <Nav className='navclass'>
            <Nav.Link href="/about" style={{color: 'white'}}>About Me</Nav.Link>
            <Nav.Link href="/projects" style={{color: 'white'}}>My Projects</Nav.Link>
            <Nav.Link href="/contact" style={{color: 'white'}}>Contact Me</Nav.Link>
          </Nav>
      </Navbar>
    </div>
  )
}

export default NavBar


// deleted from import: Form, FormControl
// deleted from first nav bar tag
// textShadow: '2px 1px white' from line 7
// , textShadow: '1px 1px white !important' from Navbar.Brand
//  style={{width: '650px', padding: '10px',                                                   <--- from Navbar 8 inline
//margin: '10px', color: 'white !important', textDecoration: 'underline', marginLeft: '25px'}}