import React from "react";
import  ReactDOM  from "react";
import { Navbar,NavDropdown,Container,Nav,FormControl,Form,Button} from 'react-bootstrap';
function Navigationbar (){
    
    return(
        <>
          
          <Navbar bg="info" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#"><img   style={{width:'80px', height:"30px"}}src="http://ssinnolab.com/images/ssa_logo1_tr.png"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-1 my-lg-0" 
        style={{ maxHeight: '70px', padding:'2x'}}
        navbarScroll>
      
        
        <Nav.Link href="#action1" >Home</Nav.Link>
        <Nav.Link href="#action2">About Us</Nav.Link>
        <NavDropdown  ClassName ="navdropdown" title="Employee Data" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Graphic Designer</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Developer</NavDropdown.Item>
          <NavDropdown.Item href="#action4">HR & Management</NavDropdown.Item>
       
        </NavDropdown>
  
  
        <Nav.Link href="#action1">Contact Us </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
    
}
export default Navigationbar;