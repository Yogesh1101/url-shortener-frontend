import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function NavBar() {
  // menu is set to show or disable the menu in small screen
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    /* The nav contains all the required details like link names, menu icon and a title */
    <nav>
      <Link to="/" className="title">
        URL Shortener Task
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Signup</NavLink>
        </li>
        {/* <li>
          <NavLink to="/shortUrl">Short URL</NavLink>
        </li> */}
        <li>
          <NavLink to="/forgot-password">Forgot Password</NavLink>
        </li>
        <li>
          <NavLink onClick={handleLogout} to="/login">
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
