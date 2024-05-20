import React from "react";
import logo from "../logo/image.png";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function Nav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-trasnparent">
      <a className="navbar-brand " href="#">
        <img id="aep" className=" bg-transparent" src={logo} alt="logo"></img>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link text-white" href="#">
              About<span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-white"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Services
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-white"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Application of waste
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-white"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Industrial Application
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white"
              href="#"
              variant="primary"
              onClick={handleShow}
            >
              Contact Us
            </a>
          </li>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Contact Us</Modal.Title>

              <p>Any question or remarks? Just write us a message!</p>
            </Modal.Header>
            <Modal.Body>
              <Form>
                {" "}
                <div style={{ display: "flex" }}>
                  <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control></Form.Control>
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
                    <Form.Control type="Number"></Form.Control>
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
          </Modal>
          {/* <Popup
            trigger={
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Contact
                </a>
              </li>
            }
            position="center"
          >
            <div>
              <h3>Contact Us</h3>
              <p>Any question or remarks? Just Write us a message! </p>
              <div>
                <div id="contact-info">
                  <b>Contact Information</b>
                  <p>Say Something to start a live chat</p>
                </div>
                <div>
                  <form>
                    <label>First Name</label>
                    <input></input>
                    <label>Last Name</label>
                    <input></input>
                    <label>Email</label>
                    <input type="email"></input>
                    <label>Phone Number</label>
                    <input type="Number"></input>
                    <label for="cars">Choose a car:</label>
                    <label>Select Subject?</label>
                    <label>General Enquiry</label>
                    <input type="checkbox"></input>
                    <label>General Enquiry</label>
                    <input type="checkbox"></input>
                    <label>General Enquiry</label>
                    <input type="checkbox"></input>
                    <label>General Enquiry</label>
                    <input type="checkbox"></input>
                    <label>Message</label>
                    <textarea></textarea>
                    <button>Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </Popup> */}
        </ul>
      </div>
    </nav>
  );
}
