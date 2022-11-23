import "./index.scss";
import NavbarTransparent from "../NavbarTransparent";
import { RoughNotation } from "react-rough-notation";

import member3 from "../../images/react-icon.png";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="circle d-sm-none">
        <div className="circle-container">
          <img
            src={member3}
            alt=""
            style={{
              width: "70px",
              height: "70px",
            }}
          />
        </div>
      </div>
      <NavbarTransparent />
      <div className="hero-section_container container">
        <div className="hero-section">
          {/* TECH - DESIGN, DEV, ML, DS */}

          <div>
            <h1>
              Accelerate <span className="d-sm-none">✨</span>
              <br className="d-sm-none" />
              <RoughNotation
                type="underline"
                show={true}
                color="#B6A4FF"
                strokeWidth={3}
              >
                Your&nbsp;&nbsp;tech&nbsp;
              </RoughNotation>{" "}
              <br className="d-sm-block" />
              Journey
            </h1>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
            natus deleniti, eius reiciendis error ullam{" "}
            <br className="d-sm-none" /> odio quo optio similique cum quae
            consequuntur minima accusantium iusto iste eaque cupiditate quos
            veniam?
          </p>
          <button className="btn btn-purple">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
