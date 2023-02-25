import picture from "../../images/profilePicture.jpg";
import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";

export default function AboutMe() {
  return (
    <Container className="text-center">
      <Row>
        <Col>
          <h1>Meet Adam Stovall</h1>
          <img src={picture} alt="headshot" width="300px" />
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Card className="shadow-sm" style={{ width: "700px" }}>
          <Card.Body>
            <p class="bio-text">
        Meet Adam Stovall, a versatile young professional who has made a career out of bringing creative visions to life through television, film, and event production. With a passion for technology and problem-solving, Adam has recently transitioned into the world of web development and is now a certified full stack web developer.
        </p>
          </Card.Body>
        </Card>
      </Row>
      <Row className="justify-content-center mt-3">
        <Card className="shadow-sm" style={{ width: "500px" }}>
          <Card.Body>
            <h2>
        Skills:
        </h2>
        <p class="skills">JavaScript</p>
        <p class="skills">Database Management (MySQL/MongoDB/GraphQL)</p>
        <p class="skills">Python</p>
        <p class="skills">Amazon Web Services</p>
        <p class="skills">Express.js</p>
        <p class="skills">jQuery</p>
        <p class="skills">Node.js</p>
        <p class="skills">React.js</p>
        <p class="skills">HTML / CSS</p>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}