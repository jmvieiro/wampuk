import { Button, Container, Form, InputGroup, Modal } from "react-bootstrap";
import React, { useContext } from "react";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoginContext } from "../context/LoginContext";
import Swal from "sweetalert2";
import { useHistory } from "react-router";

const ModalLogin = ({
  adult,
  showLoginAdulto = null,
  setShowLoginAdulto = null,
  showLoginNino = null,
  setShowLoginNino = null,
}) => {
  const { loginNino, loginAdulto } = useContext(LoginContext);
  const history = useHistory();
  return (
    <>
      {adult ? (
        <Modal
          show={showLoginAdulto}
          onHide={() => {
            setShowLoginAdulto(false);
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title
              style={{ flex: 1, textAlign: "center", color: "white" }}
            >
              Inicia sesión
            </Modal.Title>
          </Modal.Header>
          <Form
            onSubmit={async (e) => {
              e.preventDefault();
              const result = await loginAdulto(
                e.target.elements.correo.value,
                e.target.elements.clave.value
              );
              if (result === "success") {
                setShowLoginAdulto(false);
                Swal.fire({
                  title: "¡Bienvenido a Wampuk!",
                  icon: "success",
                  cancelButtonText: `IR A MI CUENTA`,
                  confirmButtonText: "ACEPTAR",
                  showCancelButton: true,
                }).then((result) => {
                  if (result.isDismissed) history.push("/micuenta");
                });
              }
              if (result === "children") {
                setShowLoginAdulto(false);
                Swal.fire({
                  title: "¡Bienvenido a Wampuk!",
                  text: " ¿Listo para conocer nuestros cursos? Elige tu suscripción y no te olvides de registrar a tus niñxs para que puedan navegar por la Sección Infantil.",
                  icon: "success",
                  confirmButtonText: "REGISTRAR NIÑX",
                }).then((result) => {
                  if (result.isConfirmed) history.push("/micuenta");
                });
              }
            }}
          >
            <Modal.Body>
              <Container>
                <Form.Group controlId="correo">
                  <InputGroup className="mb-3">
                    <InputGroup.Text>@</InputGroup.Text>
                    <Form.Control type="email" placeholder="Mail" />
                  </InputGroup>
                </Form.Group>
                <Form.Group controlId="clave">
                  <InputGroup className="mb-2">
                    <InputGroup.Text>
                      <FontAwesomeIcon
                        color="#212529;"
                        icon={faLock}
                        title="Contraseña"
                      />
                    </InputGroup.Text>
                    <Form.Control type="password" placeholder="Contraseña" />
                  </InputGroup>
                </Form.Group>
              </Container>
            </Modal.Body>
            <Modal.Footer style={{ justifyContent: "center" }}>
              <Button className="btn-morado" type="submit">
                INICIAR SESIÓN
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      ) : (
        <Modal
          className="children"
          show={showLoginNino}
          onHide={() => {
            setShowLoginNino(false);
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title
              style={{ flex: 1, textAlign: "center", color: "black" }}
            >
              Inicia sesión
            </Modal.Title>
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
                  <InputGroup className="mb-3">
                    <InputGroup.Text>
                      <FontAwesomeIcon
                        color="#212529;"
                        icon={faUser}
                        title="Usuario"
                      />
                    </InputGroup.Text>
                    <Form.Control type="text" placeholder="Usuario" />
                  </InputGroup>
                </Form.Group>
                <Form.Group controlId="clave2">
                  <InputGroup className="mb-2">
                    <InputGroup.Text>
                      <FontAwesomeIcon
                        color="#212529;"
                        icon={faLock}
                        title="Contraseña"
                      />
                    </InputGroup.Text>
                    <Form.Control type="password" placeholder="Contraseña" />
                  </InputGroup>
                </Form.Group>
              </Container>
            </Modal.Body>
            <Modal.Footer style={{ justifyContent: "center" }}>
              <Button className="btn-morado" type="submit">
                INICIAR SESIÓN
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default ModalLogin;
