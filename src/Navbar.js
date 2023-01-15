import React from "react"
import logo from "./images/logo.svg"
import { FaBars } from "react-icons/fa"
import { useGlobalContext } from "./context"

const Navbar = () => {
  const { onenSidebar, openSubmenu, closeSubmenu } = useGlobalContext()

  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="Stripe Logo" />
          <button className="btn toggle-btn" onClick={onenSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn">Products</button>
          </li>
          <li>
            <button className="link-btn">Devekopers</button>
          </li>
          <li>
            <button className="link-btn">Company</button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign In</button>
      </div>
    </nav>
  )
}

export default Navbar
