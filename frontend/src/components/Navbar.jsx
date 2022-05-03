import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Website
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only"></span>
                </NavLink>
               </li> 
               <li className="nav-item">
                <NavLink className="nav-link" to="/Notes">
                  Notes
                  <span className="sr-only"></span>
                </NavLink>
               </li> 
               <li className="nav-item">
                <NavLink className="nav-link" to="/CreateNotes">
                  CreateNotes
                  <span className="sr-only"></span>
                </NavLink>
               </li> 
             </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
