import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};


function BasicExample() {
  return (
    <Navbar expand="lg" bg="black" variant="dark">
      <Container>
        <Navbar.Brand href="#home">MY-PORTFOLIO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link onClick={() => scrollToSection("home-section")}>Home</Nav.Link>
<Nav.Link onClick={() => scrollToSection("skills-section")}>Skills</Nav.Link>
<Nav.Link onClick={() => scrollToSection("projects-section")}>Projects</Nav.Link>
          </Nav>
          <Nav>
            {/* LinkedIn Icon */}
            <Nav.Link href="https://www.linkedin.com/in/surendrachakali" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} size="2xl" />
            </Nav.Link>

            {/* GitHub Icon */}
            <Nav.Link href="https://github.com/suri5790" target="_blank">
              <FontAwesomeIcon icon={faGithub} size="2xl" />
            </Nav.Link>

            {/* Email Icon */}
            <Nav.Link href="mailto:surendrasudhakar678@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="2xl"/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
