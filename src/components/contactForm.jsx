import { Button, Col, Container, Form, Row } from "react-bootstrap";

import React from "react";

const ContactForm = ({ adult = false }) => {
  return (
    <>
      <Container
        fluid
        className="bg-gray1 text-white p-4 py-5 py-lg-4"
        id="contact"
      >
        <Container>
          <h2 className="text-left mb-4">Contacto</h2>
          <Row>
            <Col lg={5}>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="nombre@ejemplo.com" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Consulta</Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="Consulta" />
                  <Button variant="success" className="mt-3 btn-sm">ENVIAR</Button>{" "}
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default ContactForm;
