import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { stacks } from "../../configs/skills.config";

export const Skills = () => {
  return (
    <>
      <section className="d-flex align-items-center skills" id="skills">
        <Container>
          <div data-aos="zoom-in-up">
            <Row>
              <Col xs={12}>
                <h2> Skills </h2>
              </Col>
            </Row>
          </div>

          {stacks.map((stack, index) => (
            <>
              <div data-aos="zoom-in-up">
                <Row className="mt-2">
                  <Col sm={12} className="mb-2">
                    <h3 style={{ borderBottom: "1px solid" }}>
                      {" "}
                      {stack.description}{" "}
                    </h3>
                  </Col>
                </Row>
                <Row className="rowStacks">
                  {stack.technologys.map((technology, index) => (
                    <Col lg={3} md={4} sm={6} xs={6} className="mb-3">
                      <Card className="cardStacks">
                        <div className="cardBody">
                          <div className="divIcon">
                            <img
                              src={technology.icon}
                              alt={technology.name}
                              className="imgStacks"
                            />
                          </div>
                          {technology.name !== "" ? (
                            <div className="divName">
                              <h6>{technology.name}</h6>
                            </div>
                          ) : null}
                        </div>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </>
          ))}
        </Container>
      </section>
    </>
  );
};
