import "./intro.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { init } from "ityped";
import { useEffect, useRef } from "react";

const Intro = (props) => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      loop: true,
      typeSpeed: 50,
      backDelay: 1500,
      backSpeed: 30,
      strings: ["Frontend Developer.", "ex Product Marketeer at Booking.com", ";-)"],
    });
  },[]);

  return (
    <div className="intro" id="intro" onClick={props.menuClose}>
      <div className="left">
        <div className="imageContainer">
          <img src="./assets/profile.png" alt="profile" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi, welcome to my Portfolio!</h2>
          <h1>I'm Ondrej</h1>
          <span ref={textRef} />
        </div>
        <a href="#portfolio">
          <KeyboardArrowDownIcon className="arrowDown" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
