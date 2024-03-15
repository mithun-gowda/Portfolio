import { Container, Row, Col } from "react-bootstrap";
import heroImg from "../assets/img/header-img.svg";

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my world!</span>
            <h1>
              Hey! I am Mithun Gowda !
              <br /><span className="space-color"> Product Developer</span>
            </h1>
            <p>As a young and open-minded professional, DevOps and Cloud Infrastructure enthusiast with a passion for mastering Python, DevOps methodologies, and
              cloud optimization. Proficient in Git, GitHub, Linux, containerization, and orchestration. Dedicated to continuous
              learning and growth, with a proactive mindset and a commitment to driving organizational success through
              innovation.
            </p>
          </Col>
          <Col xs={15} md={6} xl={5}>
            <img src={heroImg} alt="Hero img"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
