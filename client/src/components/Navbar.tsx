import { Link } from "react-scroll";

export function Navbar() {
  return (
    <nav>
      <ol>
        <li>
          <Link to="/Homepage.tsx" smooth={true} duration={500}>
            Homepage
          </Link>
        </li>
        <li>
          <Link to="secondsection" smooth={true} duration={500}>
            Second Section
          </Link>
        </li>
        <li>
          <Link to="thirdsection" smooth={true} duration={500}>
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
