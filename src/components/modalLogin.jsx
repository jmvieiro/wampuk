import { Button, Container, Form, Modal } from "react-bootstrap";
import React, { useContext } from "react";

import { LoginContext } from "../context/LoginContext";

const ModalLogin = ({
  adult,
  showLoginAdulto = null,
  setShowLoginAdulto = null,
  showLoginNino = null,
  setShowLoginNino = null,
}) => {
  const { loginNino, loginAdulto } = useContext(LoginContext);

  return (
    <>
      {adult ? (
        <Modal
          show={showLoginAdulto}
          onHide={() => {
            setShowLoginAdulto(false);
          }}
        >
          <Modal.Header>
            <Modal.Title>Iniciar Sesión</Modal.Title>
          </Modal.Header>
          <Form
            onSubmit={async (e) => {
              e.preventDefault();
              const result = await loginAdulto(
                e.target.elements.correo.value,
                e.target.elements.clave.value
              );
              if (result === "success") setShowLoginAdulto(false);
            }}
          >
            <Modal.Body>
              <Container>
                <Form.Group controlId="correo">
                  <Form.Label>Correo</Form.Label>
                  <Form.Control type="email" placeholder="Ingresa tu correo" />
                </Form.Group>
                <Form.Group controlId="clave">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>
              </Container>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="danger"
                onClick={() => {
                  setShowLoginAdulto(false);
                }}
              >
                Cerrar
              </Button>
              <Button variant="success" type="submit">
                Ingresar
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      ) : (
        <Modal
          show={showLoginNino}
          onHide={() => {
            setShowLoginNino(false);
          }}
        >
          <Modal.Header>
            <Modal.Title>Iniciar</Modal.Title>
          </Modal.Header>
          <Form
            onSubmit={async (e) => {
              e.preventDefault();
              const result = await loginNino(
                e.target.elements.usuario.value,
                e.target.elements.clave2.value
              );
              if (result === "success") setShowLoginNino(false);
            }}
          >
            <Modal.Body>
              <Container>
                <Form.Group controlId="usuario">
                  <Form.Label>Tu usuario</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingresa el usuario que creó tu padre"
                  />
                </Form.Group>
                <Form.Group controlId="clave2">
                  <Form.Label>Tu contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Ingresa la contraseña que asignó tu padre"
                  />
                </Form.Group>
              </Container>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="danger"
                onClick={() => {
                  setShowLoginNino(false);
                }}
              >
                Cerrar
              </Button>
              <Button variant="success" type="submit">
                Ingresar
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default ModalLogin;
