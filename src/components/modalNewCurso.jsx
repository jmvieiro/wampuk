import { Button, Container, Form, Modal } from "react-bootstrap";
import React, { useContext } from "react";

import { LoginContext } from "../context/LoginContext";
import Swal from "sweetalert2";
import { crearCursoNino } from "../firebase/client";

const ModalNewCurso = ({ showModal, setShowModal, curso }) => {
  const { datosAdulto } = useContext(LoginContext);
  return (
    <>
      <Modal
        show={showModal}
        onHide={() => {
          setShowModal(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ flex: 1, textAlign: "center", color: "white" }}>
            Inscribir en curso
          </Modal.Title>
        </Modal.Header>
        <Form
          onSubmit={async (e) => {
            e.preventDefault();
            if (e.target.elements.hijo.value === "") {
              return Swal.fire({
                title: "Selecciona un niñx.",
                icon: "error",
                confirmButtonText: "ACEPTAR",
              });
            }
            const cursoNino = {
              nino: e.target.elements.hijo.value,
              curso: curso.id,
            };
            crearCursoNino(cursoNino).then((response) => {
              setShowModal(false);
              if (response === false) {
                Swal.fire({
                  title: "El niñx ya se encuentra inscrito en el curso.",
                  confirmButtonText: "ACEPTAR",
                  icon: "error",
                });
              } else {
                Swal.fire({
                  title: "¡Has inscrito correctamente al niñx!",
                  confirmButtonText: "ACEPTAR",
                  icon: "success",
                });
              }
            });
          }}
        >
          <Modal.Body>
            <Container>
              <Form.Group controlId="hijo">
                <Form.Select aria-label="Default select example">
                  <option value="">Selecciona al niñx</option>
                  {datosAdulto.hijos &&
                    datosAdulto.hijos.map((hijo) => {
                      return <option value={hijo.id}>{hijo.usuario}</option>;
                    })}
                </Form.Select>
              </Form.Group>
            </Container>
          </Modal.Body>
          <Modal.Footer style={{ justifyContent: "center" }}>
            <Button className="btn-morado" type="submit">
              INSCRIBIR
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default ModalNewCurso;
