import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
  return (
    <Navbar expand="lg" bg="black" variant="dark">
      <Container>
        <Navbar.Brand href="#home">MY-PORTFOLIO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <Nav>
            {/* LinkedIn Icon */}
            <Nav.Link href="https://www.linkedin.com/in/your-profile" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} size="2xl" />
            </Nav.Link>

            {/* GitHub Icon */}
            <Nav.Link href="https://github.com/your-username" target="_blank">
              <FontAwesomeIcon icon={faGithub} size="2xl" />
            </Nav.Link>

            {/* Email Icon */}
            <Nav.Link href="mailto:your-email@example.com">
            <FontAwesomeIcon icon={faEnvelope} size="2xl"/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
