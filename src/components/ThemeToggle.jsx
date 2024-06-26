import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import Wrapper from "../assets/Wrappers/ThemeToggle";

const ThemeToggle = () => {
  let isDarkTheme = true;
  return (
    <Wrapper>
      {isDarkTheme ? (
        <BsFillSunFill className="toggle-icon" />
      ) : (
        <BsFillMoonFill className="toggle-icon" />
      )}
    </Wrapper>
  );
};

export default ThemeToggle;
