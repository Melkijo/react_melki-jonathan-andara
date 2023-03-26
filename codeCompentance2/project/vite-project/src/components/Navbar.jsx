import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" id="navbarScroll">
      <a
        className="navbar-brand"
        style={{ fontSize: 24, fontWeight: 800, color: "white" }}
        href="#"
      >
        <span style={{ color: "#01CC8E" }}>MEJO</span>TECH.
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2  d-flex align-items-center justify-content-center gap-5">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact">
              <Button text="Contact Me" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
