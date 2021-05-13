import {Navbar, Nav} from "react-bootstrap";


const NavBar = () => {
  return(
    <div style={{width: '500px', textShadow: '1.5px 1.5px 0px  white', textDecoration: 'underline white'}}>
      <Navbar bg="transparent">
        <Navbar.Brand href="/">Jedediah Wood</Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">About Me</Nav.Link>
            <Nav.Link href="#link">My Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar


// deleted from import: Form, FormControl
// deleted from first nav bar tag