import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/experience"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Experience
          </NavLink>
        </li>

        {/* External Resume link opens PDF in new tab */}
        <li className="nav-item">
          <a
            href="/Resume.pdf"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open resume PDF"
          >
            Resume
          </a>
        </li>
        <li className="nav-item">
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </NavLink>
        </li>
        
      </ul>
    </nav>
  );
};

export default Nav;
