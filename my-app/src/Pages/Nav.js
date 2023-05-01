import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from "./Footer"

// import "./styles.css";
// import { Nav, Navbar, NavDropdown } from "react-bootstrap";
// import { ReactComponent as Logo } from "./logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Navbar collapseOnSelect expand="lg"   className='navBar'>
    <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
      <Navbar.Collapse id="responsive-navbar-nav" className='listNav'>
        <Nav className="mr-auto">
          <Nav.Link ><p> <Link to="/signin" className="loginLink">تسجيل الدخول</Link></p></Nav.Link>
          <Nav.Link ><p className='navP'> <Link className="partjoin" to="/driverjoin" style={{ textDecoration: 'none', color:"white"}}>انضم كسائق</Link></p></Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link ><p className='navP'><Link className="partjoin" to="/joinp" style={{ textDecoration: 'none', color:"white"}}>انضم كشريك</Link></p></Nav.Link>
          <Nav.Link >
          <p className='navP'><Link className="partjoin" to="/product" style={{ textDecoration: 'none', color:"white"}}> جميع الخدمات</Link></p>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
        <Navbar.Brand href="#home" className='logoShoghba'>
        {/* <Logo
          alt=""
          width="30"
          height="30"
          className="d-inline-block align-top"
        /> */}
        
        <h2>
<div className="logoH1">

        <Link style={{ textDecoration: 'none', color:"white"}} to="/">جُــغــبة</Link>
</div>
        </h2>
      </Navbar.Brand>
    </Navbar>
  );
}



{/* <nav className="navBar">
                       <div className='logo'> 
                       
                       <p>جغبة</p>
                       <div/>
                       <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/post">Post</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/Partner">الشريك</Link></li>
                        </ul>
                        </div>
                        <div>
                        <a>المستخدم </a>
                        </div>
                      </nav> */}
                      {/* <NavDropdown className='drop' title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                          Separated link
                        </NavDropdown.Item>
                      </NavDropdown> */}