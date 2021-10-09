import React from "react";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
              <NavLink className="navbar-brand" to="/">
                Navbar
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink
                      exact
                      activeClassName="active_class"
                      className="nav-link"
                      to="/"
                    >
                      home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact
                      activeClassName="active_class"
                      className="nav-link"
                      to="/about"
                    >
                      about
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      activeClassName="active_class"
                      className="nav-link"
                      to="/service"
                    >
                      service
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      activeClassName="active_class"
                      className="nav-link"
                      to="/contact"
                    >
                      contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
export default NavBar;
