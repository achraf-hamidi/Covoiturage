 import React from "react";
 import { Link, Router } from "react-router-dom";
 import { useSelector } from 'react-redux';

 // reactstrap components
 import {
   Button,
   Collapse,
   DropdownToggle,
   DropdownMenu,
   DropdownItem,
   UncontrolledDropdown,
   NavbarBrand,
   Navbar,
   NavItem,
   NavLink,
   Nav,
   Container,
   UncontrolledTooltip,
 } from "reactstrap";

 function NavBar() {
   const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
   const [collapseOpen, setCollapseOpen] = React.useState(false);
   React.useEffect(() => {
     const updateNavbarColor = () => {
       if (
         document.documentElement.scrollTop > 399 ||
         document.body.scrollTop > 399
       ) {
         setNavbarColor("");
       } else if (
         document.documentElement.scrollTop < 400 ||
         document.body.scrollTop < 400
       ) {
         setNavbarColor("navbar-transparent");
       }
     };
     window.addEventListener("scroll", updateNavbarColor);
     return function cleanup() {
       window.removeEventListener("scroll", updateNavbarColor);
     };
   });
   return (
     <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
       <Container>
         <div className="navbar-translate">
           <NavbarBrand href="#top" target="_blank" id="navbar-brand">
             Covoiturage
           </NavbarBrand>

           <button
             className="navbar-toggler navbar-toggler"
             onClick={() => {
               document.documentElement.classList.toggle("nav-open");
               setCollapseOpen(!collapseOpen);
             }}
             aria-expanded={collapseOpen}
             type="button"
           >
             <span className="navbar-toggler-bar top-bar"></span>
             <span className="navbar-toggler-bar middle-bar"></span>
             <span className="navbar-toggler-bar bottom-bar"></span>
           </button>
         </div>
         <Collapse className="justify-content-end" isOpen={collapseOpen} navbar>
           <Nav navbar>
             <NavItem>
               <NavLink href="#pablo" onClick={(e) => {}}>
                 <i className="now-ui-icons ui-1_simple-add"></i>
                 <p>Publier un trajet</p>
               </NavLink>
             </NavItem>
             <NavItem>
               <NavLink
                 href="#pablo"
                 onClick={(e) => {
                   e.preventDefault();
                   document.getElementById("download-section").scrollIntoView();
                 }}
               >
                 <i className="now-ui-icons ui-1_zoom-bold "></i>
                 <p>Rechercher un trajet</p>
               </NavLink>
             </NavItem>
             <NavItem>
               <UncontrolledDropdown nav>
                 <DropdownToggle
                   className="nav-link btn-round"
                   aria-expanded={false}
                   aria-haspopup={true}
                   caret
                   color="white"
                   data-toggle="dropdown"
                   type="button"
                   style={{
                     backgroundColor: "transparent",
                     borderBlock: "white",
                     boxShadow: "none",
                   }}
                 >
                   <p>username</p>
                 </DropdownToggle>
                 <DropdownMenu>
                   <DropdownItem to="/index">
                     <i className="now-ui-icons users_single-02"></i>
                     Profil
                   </DropdownItem>
                   <DropdownItem
                     href="https:demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar"
                     target="_blank"
                   >
                     <i className="now-ui-icons arrows-1_minimal-right"></i>
                     Logout
                   </DropdownItem>
                 </DropdownMenu>
               </UncontrolledDropdown>
             </NavItem>
           </Nav>
         </Collapse>
       </Container>
     </Navbar>
   );
 }

 export default NavBar;

