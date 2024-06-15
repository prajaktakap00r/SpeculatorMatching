import Wrapper from "../assets/Wrappers/Navbar";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <Wrapper>
      <div className="nav-center">
        <div>
          <button type="button" className="toggle-btn">
            Home
          </button>
          <button type="button" className="toggle-btn">
            About
          </button>
          <button type="button" className="toggle-btn">
            Services
          </button>
          <button type="button" className="toggle-btn">
            Contact
          </button>
        </div>
      </div>
      <div className="btn-container">
        <ThemeToggle />
      </div>
    </Wrapper>
  );
}
