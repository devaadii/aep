import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Button, Modal, Form } from "react-bootstrap";
import logo from "../logo/image.png";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import conimg from "../img/image copy 6.png";

const MyNavbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar id="navi" expand="lg" bg="transparent" variant="light">
        <Navbar.Brand href="#">
          <img id="aep" className="bg-transparent" src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavDropdown" />
        <Navbar.Collapse id="navbarNavDropdown" className="justify-content-end">
          <Nav>
            <Nav.Link className="" href="#">
              About
            </Nav.Link>
            <NavDropdown
              title="Services"
              id="navbarDropdownMenuLink"
              className="text-white"
            >
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Application of waste"
              id="navbarDropdownMenuLink"
              className="text-white"
            >
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Industrial Application"
              id="navbarDropdownMenuLink"
              className="text-white"
            >
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="text-white" href="#" onClick={handleShow}>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <div style={{ display: "flex" }}>
          <div>
            {" "}
            <img src={conimg} style={{ width: "20vw" }}></img>
          </div>
          <div>
            <Modal.Header closeButton>
              <Modal.Title>Contact Us</Modal.Title>
              <p>Any question or remarks? Just write us a message!</p>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <div style={{ display: "flex" }}>
                  <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </div>
                <div style={{ display: "flex" }}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Phone Number:</Form.Label>
                    <Form.Control type="Number" />
                  </Form.Group>
                </div>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Example textarea</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                {["checkbox", "radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Label>Select Subjects: </Form.Label>
                    <Form.Check
                      inline
                      label="1"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="2"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      disabled
                      label="3 (disabled)"
                      type={type}
                      id={`inline-${type}-3`}
                    />
                  </div>
                ))}
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Send Message
              </Button>
            </Modal.Footer>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MyNavbar;
