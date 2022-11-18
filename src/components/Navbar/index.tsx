import "./index.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <a href="" className="nav-brand">
          LOGO
        </a>
      </div>
      <ul className="nav-items">
        <li>
          <a href="#about-us">About Us</a>
        </li>
        <li>
          <a href="#events">Events</a>
        </li>
        <li>
          <a href="#impacts">Our Impacts</a>
        </li>
      </ul>
      <div>
        <a href="">{/* <button>Get Started ?</button> */}</a>
      </div>
    </nav>
  );
};

export default Navbar;
