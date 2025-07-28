import { Link } from "react-router";
import "../assets/styles/Navbar.css";
export function Navbar() {
  return (
    <nav className="navbar_container">
      <ul>
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="presentation">Présentation</Link>
        </li>
        <li>
          <Link to="/projets">Projets</Link>
        </li>
        <li>
          <Link to="/technologies">Technologies</Link>
        </li>
        <li>
          <Link to="/experiences">Expériences</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
