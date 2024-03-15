import { Col, Row } from "react-bootstrap";

export default function Resume() {
  const downloadDocument = () => {
    const link = document.createElement("a");
    link.href = "https://1drv.ms/b/c/54c857a30a5fec46/EfNNL79RgX9GvE9N5WKGdTUBd54WuvY_inR2vj1TIVo_1A?e=Jr7ydy";
    link.setAttribute('download', 'mithun-resume.pdf');
    
    link.setAttribute('target', '_blank');

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <Col lg={12}>
        <div className="download-bx">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>
                Do you want to know more about me?<br /> Here is my resume
              </h3>
            </Col>
            <Col md={6} xl={6}>
              <div className="download-resume">
                <button onClick={downloadDocument}>
                  <span>Download</span>
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </div>
  );
}