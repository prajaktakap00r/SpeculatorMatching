import Wrapper from "../assets/Wrappers/RegisterAndLogin";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <h4>Register</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            First name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            required
          />
          <label htmlFor="name" className="form-label">
            Last name
          </label>
          <input
            type="text"
            id="name"
            name="last name"
            className="form-input"
            required
          />
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="name"
            name="email"
            className="form-input"
            required
          />
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="name"
            name="password"
            className="form-input"
            required
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
