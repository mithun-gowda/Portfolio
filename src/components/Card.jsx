import { Col } from "react-bootstrap";
export default function Card({ title, description, imgURL, URL }) {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <a href={URL}>
        <img src={imgURL} alt="proj-img" />        
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </a>
      </div>
    </Col>
  );
}
