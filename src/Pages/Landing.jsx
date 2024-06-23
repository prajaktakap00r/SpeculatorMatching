import Navbar from "../components/Navbar";
import Wrapper from "../assets/Wrappers/Landing";
import img1 from "../assets/images/PP-Boy.svg";
import Home from "../components/Home";
import About from "../components/About";
import Services from "../components/Services";
export default function Landing() {
  return (
    <Wrapper>
      <Home />
      <nav>
        <Navbar />
      </nav>
      <Home />

      <h2 style={{ textAlign: "center" }} className="h2">
        About US
      </h2>
      <About />

      <h2 style={{ textAlign: "center" }} className="h2">
        SERVICES
      </h2>
      <Services
        image={img1}
        title="Prajakta"
        description=" the changes in a property to take place over a period of time. For example, if you change the color of an element from white to black, usually the change is instantaneous. With CSS transitions enabled, changes occur at time intervals that follow an acceleration curve, all of which can be customized."
      />
      <Services
        image={img1}
        title="Prajakta"
        description=" the changes in a property to take place over a period of time. For example, if you change the color of an element from white to black, usually the change is instantaneous. With CSS transitions enabled, changes occur at time intervals that follow an acceleration curve, all of which can be customized.

        "
      />
      <Services
        image={img1}
        title="Prajakta"
        description=" the changes in a property to take place over a period of time. For example, if you change the color of an element from white to black, usually the change is instantaneous. With CSS transitions enabled, changes occur at time intervals that follow an acceleration curve, all of which can be customized."
      />
    </Wrapper>
  );
}
