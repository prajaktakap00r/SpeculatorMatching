import Wrapper from "../assets/Wrappers/Navbar";
import ThemeToggle from "../components/ThemeToggle";
import { Link } from "react-router-dom";
import Logout from "./Logout";
export default function Navbar() {
  return (
    <Wrapper>
      <div className="nav-center">
        <div>
          <Link to="/">
            <button type="button" className="toggle-btn">
              Home
            </button>
          </Link>
          <Link to="/about">
            <button type="button" className="toggle-btn">
              About
            </button>
          </Link>
          <Link to="/services">
            <button type="button" className="toggle-btn">
              Services
            </button>
          </Link>
          <Link to="/contact">
            <button type="button" className="toggle-btn">
              Contact
            </button>
          </Link>
        </div>
      </div>
      <div className="btn-container">
        <ThemeToggle />
      </div>
      <div>
        <Logout />
      </div>
    </Wrapper>
  );
}
