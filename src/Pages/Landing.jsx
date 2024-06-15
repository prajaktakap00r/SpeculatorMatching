import Navbar from "./Navbar";
import Wrapper from "../assets/Wrappers/Landing";
import main from "../assets/images/main.svg";
export default function Landing() {
  return (
    <Wrapper>
      <nav>
        <Navbar />
      </nav>
      <div className="container page">
        <div>
          <img src={main} alt="hunt" className="img main-img" />
        </div>
        <div>
          <h1>Welcome!</h1>
        </div>
      </div>
    </Wrapper>
  );
}
