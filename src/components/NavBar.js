import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import '../styles/navbar.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import {
  faHouse
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub, faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navbar-container">
      <Navbar className="navbar">

        <NavbarBrand href="/">
        <FontAwesomeIcon icon={faHouse} style={{color: "#874efe",}} />
        </NavbarBrand>

        <NavbarText className="nav-site-name">
        </NavbarText>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>

            <NavItem className="nav-item">
              <NavLink href="https://github.com/kaci-wooldridge">
              <FontAwesomeIcon icon={faGithub} style={{color: "#874efe",}} />
              </NavLink>
            </NavItem>

            <NavItem className="nav-item">
              <NavLink href="https://www.linkedin.com/in/kaci-wooldridge">
              <FontAwesomeIcon icon={faLinkedin} style={{color: "#874efe",}} />
              </NavLink>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}