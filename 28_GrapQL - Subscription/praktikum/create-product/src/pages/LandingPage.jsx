import heroImg from "../assets/hero-img.png";
import "./landingPage.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSubscription, gql } from "@apollo/client";
import CardImg from "../assets/Vector.jpg";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const GET_PRODUCTS = gql`
    subscription MySubscription {
      product {
        id
        product_name
        product_freshness
        product_category
        price
        created_at
        aditional_information
      }
    }
  `;
  const { loading, error, data } = useSubscription(GET_PRODUCTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <>
      <Navbar />
      <div className="hero-section">
        <div className="hero-content-title">
          <h1>Better Solutions for Your Business</h1>
          <h5>
            We are team of talented designers making websites with Bootstrap
          </h5>
          <div className="hero-content-cta">
            <Link to="/">
              <button className="hero-content-cta-btn">Create Product</button>
            </Link>
            <a href="" className="hero-content-cta-link">
              Watch Video
            </a>
          </div>
        </div>
        <div className="hero-content-img">
          <img className="hero-img" src={heroImg} alt="" />
        </div>
      </div>
      <div className="product-list">
        <h2 className="text-center">Product List</h2>
        <div
          className="d-flex justify-content-center gap-5 "
          style={{ paddingBottom: 25 }}
        >
          {data.product
            .slice(0, 3)
            .map(({ id, product_name, aditional_information, created_at }) => (
              <Card key={id} style={{ width: "18rem" }}>
                <Card.Img variant="top" src={CardImg} />
                <Card.Body>
                  <Card.Title>{product_name}</Card.Title>
                  <Card.Text>{aditional_information}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">{created_at}</Card.Footer>
              </Card>
            ))}
        </div>
        <div
          className="d-flex justify-content-center"
          style={{ paddingBottom: 25 }}
        >
          <Link to="/store">
            <Button variant="primary" className="center">
              Load More
            </Button>
          </Link>
        </div>
      </div>
      <div className="cta-section">
        <h2 className="cta-title">Join Our Newsletter</h2>
        <p className="cta-subtitle">
          {" "}
          Tamen quem nulla quae legam multos aute sint culpa legam noster magna
        </p>
        <form action="" className="cta-form">
          <input
            className="cta-form-email"
            type="email"
            placeholder=""
            required=""
          />
          <br />
          <input
            className="cta-form-submit"
            type="submit"
            defaultValue="Subscribe"
          />
        </form>
      </div>
      <div className="footer-section">
        <div className="footer-brand">
          <div className="footer-brand-logo">ARSHA</div>
          <p>A108 Adam Street</p>
          <p>New York, NY 535022</p>
          <p>United States</p>
          <br />
          <br />
          <div className="footer-brand-contact">
            <p>
              <strong>Phone : </strong>+1 5589 55488 55
            </p>
            <p>
              <strong>Email : </strong>info@example.com
            </p>
          </div>
        </div>
        <div className="footer-link">
          <h5 className="footer-subtitle">Useful Links</h5>
          <ul>
            <li>
              <a href="">Home</a>{" "}
            </li>
            <li>
              <a href="">About us</a>{" "}
            </li>
            <li>
              <a href="">Services</a>{" "}
            </li>
            <li>
              <a href="">Terms of service</a>{" "}
            </li>
            <li>
              <a href="">Privacy policy</a>{" "}
            </li>
          </ul>
        </div>
        <div className="footer-services">
          <h5 className="footer-subtitle">Our Services</h5>
          <ul>
            <li>
              <a href="">Web Design</a>{" "}
            </li>
            <li>
              <a href="">Web Development</a>{" "}
            </li>
            <li>
              <a href="">Product management</a>{" "}
            </li>
            <li>
              <a href="">Marketing</a>{" "}
            </li>
            <li>
              <a href=""> Graphic Design</a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <h5 className="footer-subtitle">Our Social networks</h5>
          <p>
            Cras fermentum odio eu feugiat lide par naso tierra videa magna
            derita valies
          </p>
          <div className="footer-social-icons">
            <div className="footer-social-icon-item" />
            <div className="footer-social-icon-item" />
            <div className="footer-social-icon-item" />
            <div className="footer-social-icon-item" />
            <div className="footer-social-icon-item" />
          </div>
        </div>
      </div>
      <div className="copyright-section">
        <p>
          © Copyright <strong>Arsha.</strong> All rights Reserved
        </p>
        <small>Designed by BootstrapMade</small>
      </div>
    </>
  );
}
