import "./index.scss";
import NavbarTransparent from "../NavbarTransparent";

const Hero = () => {
  return (
    <section className="hero-container">
      <NavbarTransparent />
      <div className="hero-section">
        <div style={{ marginBottom: "10vh" }}>
          {/* TECH - DESIGN, DEV, ML, DS */}

          <h2>Accelerate ✨</h2>
          <h1>
            Your <span className="text-purple">TECH</span> Journey
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
            natus deleniti, eius reiciendis error ullam <br /> odio quo optio
            similique cum quae consequuntur minima accusantium iusto iste eaque
            cupiditate quos veniam?
          </p>
          <br />
          <button className="btn btn-purple">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
