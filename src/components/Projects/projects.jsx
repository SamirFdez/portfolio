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
              <Col
                key={index}
                md={6}
                sm={12}
                className="mb-4 colProject"
                data-aos="zoom-in"
              >
                <Card className="shadow cardProject">
                  <Card.Body>
                    <div>
                      <h4>{projects.name}</h4>
                    </div>
                    <Card.Img
                      variant="top"
                      src={projects.image}
                      className="imgProject pb-3"
                    />

                    <div className="card-title d-flex align-items-center">
                      {projects.stacks.map((stacks, index) => (
                        <img
                          src={stacks.icon}
                          className="me-2 stackProject"
                          key={index}
                          title={stacks.name}
                        />
                      ))}
                    </div>
                    <Row>
                      <Col xs={12} className="descriptionProject">
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
