import { Link } from "react-scroll";

export function Navbar() {
  return (
    <nav>
      <ol>
        <li>
          <Link to="homepage" smooth={true} duration={500}>
            Homepage
          </Link>
        </li>
        <li>
          <Link to="presentation" smooth={true} duration={500}>
            Présentation
          </Link>
        </li>
        <li>
          <Link to="project" smooth={true} duration={500}>
            Projets{" "}
          </Link>
        </li>
        <li>
          <Link to="technologies" smooth={true} duration={500}>
            Technologies
          </Link>
        </li>
        <li>
          <Link to="etudes" smooth={true} duration={500}>
            Etudes
          </Link>
        </li>
      </ol>
    </nav>
  );
}
