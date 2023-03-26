import Navbar from "../components/Navbar";
import "./MainPage.css";
import HeroImage from "../assets/img/Saly-39-edit.png";
import Button from "../components/Button";

export default function MainPage() {
  return (
    <div className="hero-section">
      <Navbar />
      <div className="hero-content">
        <div className="row">
          <div className="col mt-3">
            <p
              style={{ color: "#01CC8E", fontSize: "1.7rem", fontWeight: 400 }}
            >
              Hai 👋, I’m{" "}
              <span style={{ fontWeight: 900, color: "inherit" }}>ME</span>
              lki <span style={{ fontWeight: 900, color: "inherit" }}>JO</span>
              nathan{" "}
            </p>
            <p
              style={{
                fontSize: "3rem",
                fontWeight: 900,
                letterSpacing: "0.03em",
              }}
            >
              Students of Informatics Engineering University of Mataram
            </p>
            <p style={{ fontSize: "1.2rem", fontWeight: 300 }}>
              Order your website today and start competing in the online
              marketplace take advantage of this amazing opportunity!{" "}
            </p>
            <div className="row row-cols-auto align-items-center mt-2">
              <div className="col">
                <Button text="Contact Me" />
              </div>
              <a href="">
                <i className="fa-brands fa-instagram fa-2x" />
              </a>
              <a href="">
                <i className="fa-brands fa-square-behance fa-2x" />
              </a>
              <a href="">
                <i className="fa-brands fa-youtube fa-2x" />
              </a>
            </div>
            <div className="cv-hero">
              <a
                href="https://drive.google.com/drive/folders/1eXBgidvfvXeNtLSkNd3lw_YTtlfgY7B4?usp=sharing"
                target="_blank"
              >
                Download cv
              </a>
            </div>
          </div>
          <div className="col" style={{ position: "relative" }}>
            <img
              src={HeroImage}
              style={{
                position: "absolute",
                top: "-50px",
                right: 50,
                width: 600,
              }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
