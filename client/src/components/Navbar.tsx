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
            Third Section
          </Link>
        </li>
        <li>
          <Link to="fourthsection" smooth={true} duration={500}>
            Fourth Section
          </Link>
        </li>
      </ol>
    </nav>
  );
}
