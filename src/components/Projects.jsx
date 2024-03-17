import { Container, Row, Col } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Card from "./Card";
import netflix from "../assets/img/Netflix.png";
import portfolio from "../assets/img/Portfolio.png"
import homepage from "../assets/img/homepage.png";
import weather from "../assets/img/weather_demo.png";
import calculator from "../assets/img/Calculator_demo.png";
import Devops from "../assets/img/devops.jpg"

export default function Project() {
  const projects = [
    {
      title: "Home Page Animation",
      description:
        "Welcome to our innovative home page, meticulously crafted with HTML, CSS, and JavaScript to offer a unique user experience.",
      imgURL: homepage,
      URL: "https://mithun-gowda.github.io/Home-page-Animation/Index.html",
    },
    {
      title: "Weather",
      description: "This web application fetches real-time weather information based on user input for city and country. It utilizes the WeatherAPI to gather data and presents it in a user-friendly card format.",
      imgURL: weather,
      URL: "https://mithun-gowda.github.io/Weather_Monitor/",
    },
    {
      title: "Portfolio",
      description: "This platform showcases my skills, projects, and experience. The portfolio is built using Express and Node.js for the backend, Nodemailer for email functionality, and React with Bootstrap-React for the frontend.",
      imgURL: portfolio,
      URL: "https://main--stately-cascaron-ab7089.netlify.app/",
    },
    {
      title: "Netflix - Clone",
      description:
        "Step into a world of immersive entertainment with our Netflix-inspired UI, meticulously designed using CSS and HTML.",
      imgURL: netflix,
      URL: "https://mithun-gowda.github.io/netflix-clone/netflix.html",
    },
    {
      title: "Calculator",
      description:
        "Simple calculator Application using Django Framework and Designed UI using HTML, CSS and Javascript",
      imgURL: calculator,
      URL: "https://django-calculator-mu.vercel.app/",
    },
    {
      title: "DevOps",
      description:
        "Curated a portfolio of Docker projects leveraging a suite of cutting-edge technologies including AWS, Docker, Shell scripting, Jenkins, and Kubernetes. These projects encapsulate a diverse range of functionalities and applications, showcasing proficiency in containerization, automation, and orchestration within dynamic environments.",
      imgURL: Devops,
      URL: "https://github.com/mithun-gowda/DevOps-Projects",
    }
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>I'm excited to share a glimpse into a few of the projects I've had the privilege of working on.Let's dive into some highlights from my portfolio.</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <Card key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
