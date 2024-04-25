import React, { useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { navLinks } from "../../configs/navbar.config";
import CVSamirFernandez from "../../assets/docs/CV-Samir-Fernandez.pdf";

export const NavbarMenu = () => {
  const [expanded, setExpanded] = useState(false);

  const closeNav = () => {
    setExpanded(false);
  };

  const handleNavLinkClick = (sectionId) => {
    closeNav();
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 60;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const openPDF = () => {
    const PDF = CVSamirFernandez;
    window.open(PDF, "_blank");
  };

  return (
    <>
      <Navbar
        expanded={expanded}
        onToggle={(expanded) => setExpanded(expanded)}
        expand="lg"
        className="Navbar fixed-top"
      >
        <Container>
          <Navbar.Brand href="#" className="NavbarBrand">
            Samir Fernández
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ justifyContent: "end" }}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto Nav">
              {navLinks.map((link, index) => (
                <Nav.Link
                  className="navLink"
                  key={index}
                  onClick={() => handleNavLinkClick(link.enlace)}
                >
                  {link.name}
                </Nav.Link>
              ))}

              <Nav.Link>
                <Button
                  variant="outline-dark"
                  className="btnResume"
                  onClick={openPDF}
                >
                  Resume
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
