import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

const Headers = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

   return (
      <div>
         <Navbar color="secondary" light expand="md">
            <Link to='/'>
               <NavbarBrand href="/">Home</NavbarBrand>
            </Link>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
               <Nav className="mr-auto" navbar>
                  <Link to='/films'>
                     <NavItem>
                        <NavLink href="/components/">Films</NavLink>
                     </NavItem>
                  </Link>
                  <Link to='/planets'>
                     <NavItem>
                        <NavLink href="/components/">Planets</NavLink>
                     </NavItem>
                  </Link>
                  <Link to='/person'>
                     <NavItem>
                        <NavLink href="/components/">Person</NavLink>
                     </NavItem>
                  </Link>
                  <Link to='/vehicles'>
                     <NavItem>
                        <NavLink href="/components/">Vehicles</NavLink>
                     </NavItem>
                  </Link>
                  <Link to='/starships'>
                     <NavItem>
                        <NavLink href="/components/">Starships</NavLink>
                     </NavItem>
                  </Link>
               </Nav>
               <NavbarText>StarWars API</NavbarText>
            </Collapse>
         </Navbar>
      </div>
   );
}

export default Headers;