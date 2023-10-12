import React from "react";
import { Container, Row, Col, Card, Tooltip } from "react-bootstrap";
import { projectsArray } from "../../configs/projects.config";

export const Projects = () => {
  return (
    <>
      <section className="d-flex align-items-center projects" id="projects">
        <Container>
          <h2>Projects</h2>
          <Row>
            {projectsArray.map((projects, index) => (
              <Col
                key={index}
                xl={4}
                md={6}
                sm={12}
                style={{ marginBottom: "2em" }}
              >
                <Card className="shadow card">
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
                    <Card.Text>
                      <Row>
                        <Col xs={12}>{projects.description}</Col>
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
                    </Card.Text>
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
