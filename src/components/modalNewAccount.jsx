import { Button, Container, Form, Modal } from "react-bootstrap";
import React, { useContext } from "react";

import { LoginContext } from "../context/LoginContext";
import swal from "sweetalert";

const ModalNewAccount = ({
  adult,
  showCrearAdulto = null,
  setShowCrearAdulto = null,
  showCrearNino = null,
  setShowCrearNino = null,
}) => {
  const { crearCuentaAdulto, crearCuentaNino } = useContext(LoginContext);

  return (
    <>
      {adult ? (
        <Modal
          show={showCrearAdulto}
          onHide={() => {
            setShowCrearAdulto(false);
          }}
        >
          <Modal.Header>
            <Modal.Title>Crea una cuenta como padre</Modal.Title>
          </Modal.Header>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              if (
                e.target.elements.clave.value !== e.target.elements.clave2.value
              ) {
                return swal({
                  title: "Las contraseñas no coinciden",
                  icon: "warning",
                });
              }
              const result = crearCuentaAdulto(
                e.target.elements.correo.value,
                e.target.elements.clave.value
              );
              if (result === "success") {
                setShowCrearAdulto(false);
                setShowCrearNino(true);
              }
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
                  <Form.Control
                    type="password"
                    placeholder="Contraseña"
                    minLength="6"
                  />
                </Form.Group>
                <Form.Group controlId="clave2">
                  <Form.Label>Confirmar contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirmar Contraseña"
                  />
                </Form.Group>
              </Container>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="danger"
                onClick={() => {
                  setShowCrearAdulto(false);
                }}
              >
                Cancelar
              </Button>
              <Button variant="success" type="submit">
                Crear
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      ) : (
        <Modal
          show={showCrearNino}
          onHide={() => {
            setShowCrearNino(false);
          }}
        >
          <Modal.Header>
            <Modal.Title>Crea una cuenta para tu hijo</Modal.Title>
          </Modal.Header>
          <Form
            onSubmit={async (e) => {
              e.preventDefault();
              if (
                e.target.elements.clave.value !== e.target.elements.clave2.value
              ) {
                return swal({
                  title: "Las contraseñas no coinciden",
                  icon: "warning",
                });
              }
              const result = crearCuentaNino(
                e.target.elements.correo.value,
                e.target.elements.clave.value
              );
              if (result === "success") {
                setShowCrearNino(false);
              }
            }}
          >
            <Modal.Body>
              <Container>
                <Form.Group controlId="usuario">
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingresa un usuario para tu hijo"
                  />
                </Form.Group>
                <Form.Group controlId="clave">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Contraseña"
                    minLength="6"
                  />
                </Form.Group>
                <Form.Group controlId="clave2">
                  <Form.Label>Confirmar contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirmar Contraseña"
                  />
                </Form.Group>
              </Container>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="danger"
                onClick={() => {
                  setShowCrearNino(false);
                }}
              >
                Cancelar
              </Button>
              <Button variant="success" type="submit">
                Crear
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default ModalNewAccount;
