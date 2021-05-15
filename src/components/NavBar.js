import {Navbar, Nav} from "react-bootstrap";
import '../App.css';


const NavBar = () => {
  return(
    <div style={{width: '500px', textShadow: '2px 1px white', textDecoration: 'underline white'}}>
      <Navbar bg="transparent" fixed="top" style={{paddingLeft: '40px', paddingTop: '20px', borderColor: 'black !important'}}> 
      {/* can change from fixed to ^^^sticky on bootstrap website for navbar  */}
        <Navbar.Brand href="/">Jedediah Wood</Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className='navclass'>
            <Nav.Link href="/" >About Me</Nav.Link>
            <Nav.Link href="#link">My Projects</Nav.Link>
          </Nav>
        {/* </Navbar.Collapse> */}
      </Navbar>
    </div>
  )
}

export default NavBar


// deleted from import: Form, FormControl
// deleted from first nav bar tag