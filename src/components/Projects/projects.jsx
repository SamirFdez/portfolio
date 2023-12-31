import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { projectsArray } from "../../configs/projects.config";

export const Projects = () => {
  return (
    <>
      <section className="d-flex align-items-center projects" id="projects">
        <Container>
          <div data-aos="zoom-in">
            <h2>Projects</h2>
          </div>
          <Row>
            {projectsArray.map((projects, index) => (
              <Col key={index} xl={4} md={6} sm={12} className="mb-4">
                <Card className="shadow cardProject" data-aos="zoom-in">
                  <Card.Img
                    variant="top"
                    src={projects.image}
                    className="imgProject p-3 pb-0"
                  />
                  <Card.Body>
                    <div className="card-title d-flex align-items-center justify-content-between">
                      <div>
                        <h5>{projects.name}</h5>
                      </div>
                      <div>
                        {projects.stacks.map((stacks, index) => (
                          <img
                            src={stacks.icon}
                            className="ms-2 stackProject"
                            key={index}
                            title={stacks.name}
                          />
                        ))}
                      </div>
                    </div>
                    <Row>
                      <Col xs={12} style={{ height: "120px" }}>
                        {projects.description}
                      </Col>
                      <Col
                        xs={12}
                        style={{ textAlign: "right", padding: "12px" }}
                      >
                        {projects.share.map((links, index) => (
                          <a
                            key={index}
                            className="ms-3"
                            href={links.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img src={links.icon} className="iconProject" />
                          </a>
                        ))}
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};
