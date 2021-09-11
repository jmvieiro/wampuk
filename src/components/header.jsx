// import "../scss/header.scss";

import { Link } from "react-router-dom";
import React,{useState}  from "react";
import logo_wampuk_blanco from "../images/logo_wampuk_blanco.png";
import logo_wampuk_sf from "../images/logo_wampuk_sf.png";
import swal from 'sweetalert';
import {auth,db} from '../Firebase';
import {Modal,Form,Container,Button} from 'react-bootstrap';


const Header = ({ adult = false }) => {

  // modals login
  let[showLoginAdulto,setshowLoginAdulto]=useState(false);
  let[showLoginNino,setshowLoginNino]=useState(false);
  // controla la autenticacion del usuario si esta o no esta autenticado (Adulto y nino)
  let[autenticadoAdulto,setAutenticadoAdulto]=useState(false);
  let[autenticadoNino,setAutenticadoNino]=useState(false);
  // datos Padre y nino
  let[datosAdulto,setDatosAdulto]=useState([]);
  let[datosNino,setDatosNino]=useState([]);

  // crear usuarios:
  let[showCrearAdulto,setshowCrearAdulto]=useState(false);
  let[showCrearNino,setshowCrearNino]=useState(false);

  function loginAdulto(event){
    event.preventDefault();
    let data={
      'correo':event.target.elements.correo.value,
      'clave':event.target.elements.clave.value
    };
    auth.signInWithEmailAndPassword(data.correo,data.clave).then((userCredential) => {
    setDatosAdulto(userCredential.user);
    setAutenticadoAdulto(true);
    setshowLoginAdulto(false);
    swal({title: "Acceso correcto a wampuk",icon: "success"})

  })
  .catch((e) => {
    console.log(e);
    if(e.code==='auth/wrong-password'){
      swal({title: "Usuario o contraseña incorrectos",icon: "warning"})
    }else if(e.code==='auth/user-not-found'){
      swal({title: "Este correo no esta registrado",icon: "warning"})
    }
  });
  }

  function loginNino(event){
    event.preventDefault();
    db.collection("hijos")
    .where("usuario", "==",event.target.elements.usuario.value)
    .where("clave", "==",event.target.elements.clave2.value)
    .get().then((res)=>{
      if(res.empty){
        return swal({title: "Usuario o contraseña incorrectos",icon: "warning"});
      }
      localStorage.setItem('id_nino',res.docs[0].id);
      setDatosNino(res.docs[0].id);
      setshowLoginNino(false);
      setAutenticadoNino(true);
      swal({title: "Genial ya estas en Wampuk",icon: "success"})
    }).catch((err)=>{
      swal({title: "Ha ocurrido un error intentalo nuevamente",icon: "warning"});
      console.log(err);
    })
  }

  function crearCuentaAdulto(event){
    event.preventDefault();
    if(event.target.elements.clave.value !==event.target.elements.clave2.value){
      return swal({title: "Las contraseñas no coinciden",icon: "warning"})
    }
    let data={
      'correo':event.target.elements.correo.value,
      'clave':event.target.elements.clave.value
    };
    auth.createUserWithEmailAndPassword(data.correo,data.clave).then((res)=>{
      setDatosAdulto(res.user)
      setAutenticadoAdulto(true);
      setshowCrearAdulto(false);
      swal({title: "Usuario registrado correctamente",icon: "success"});
      setshowCrearNino(true); //ahora a crear la cuenta del nino
    }).catch(e=>{
      if(e.code==='auth/email-already-in-use'){
        swal({title: "Este usuario ya existe !",icon: "warning"})
      }
    });

  }

  function crearCuentaNino(event){
    event.preventDefault();
    if(event.target.elements.clave.value !==event.target.elements.clave2.value){
      return swal({title: "Las contraseñas no coinciden",icon: "warning"})
    }
    let data ={
      usuario:event.target.elements.usuario.value,
      clave :event.target.elements.clave.value,
      padre:datosAdulto.uid
    }
    db.collection('hijos').add({
      usuario: event.target.elements.usuario.value,
      clave: event.target.elements.clave.value,
      padre:datosAdulto.uid
    })
    .then((docRef) => {
      setshowCrearNino(false);
      swal({title: "La cuenta de tu hijo se ha creado correctamente",icon: "success"});
    })
    .catch((error) => {
      swal({title: "No se pudo crear la cuenta de tu hijo",icon: "warning"})
      console.error("Error writing document: ", error);
    });

  }

  return (
    <nav
      className={`navbar navbar-expand-lg text-uppercase fixed-top ${
        adult ? "background-adults" : "background-children"
      }`}
      id="mainNav"
    >
      <div className="container  text-black">
        <Link to={"/"} className="navbar-brand">
          <img
            src={adult ? logo_wampuk_blanco : logo_wampuk_sf}
            title="Wampuk"
            alt="Wampuk"
            className="logo"
          />
        </Link>
        <button
          className="navbar-toggler text-uppercase font-weight-bold fw-bold text-white rounded"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          &nbsp;
          <i className="fas fa-bars  text-black" style={{ fontSize: 35 }}></i>
          &nbsp;
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            {adult ? (
              <>
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-2 px-0 px-lg-2 rounded"
                    href="#portfolio"
                  >
                    Cursos
                  </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-2 px-0 px-lg-2 rounded"
                    href="#about"
                  >
                    Suscripciones
                  </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-2 px-0 px-lg-2 rounded"
                    href="#contact"
                  >
                    Preguntas frecuentes
                  </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <Link
                    to={"/children"}
                    className="nav-link py-2 px-0 px-lg-2 rounded"
                  >
                    Sección Infantil
                  </Link>
                </li>
                {autenticadoAdulto ? (<>
                <li className="nav-item mx-0 mx-lg-1">
                  <a onClick={()=>{setshowCrearNino(true)}}
                    className="nav-link py-2 px-0 px-lg-2 rounded"
                    href="#contact"
                  >
                    Crea una cuenta para tu hijo
                  </a>
                </li>
                </>) : (<>
                  <li className="nav-item mx-0 mx-lg-1">
                  <a onClick={()=>{setshowLoginAdulto(true)}}
                    className="nav-link py-2 px-0 px-lg-2 rounded"
                    href="#contact"
                  >
                    Ingresar
                  </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a onClick={()=>{setshowCrearAdulto(true)}}
                    className="nav-link py-2 px-0 px-lg-2 rounded"
                    href="#contact"
                  >
                    Registrarse
                  </a>
                </li>
                </>) }

                {/* Modal Login adultos*/}
                  <Modal  show={showLoginAdulto}
                          onHide={()=>{setshowLoginAdulto(false)}}>
                    <Modal.Header closeButton>
                      <Modal.Title>Iniciar Sesión</Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={(e)=>{loginAdulto(e)}}>
                      <Modal.Body >
                        <Container>
                          <Form.Group controlId="correo">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control type="email" placeholder="ingresa tu correo" />
                          </Form.Group>

                          <Form.Group controlId="clave">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Contraseña" />
                          </Form.Group>
                        </Container>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant='danger' onClick={()=>{setshowLoginAdulto(false)}}>Cerrar</Button>
                        <Button variant="success" type="submit">ingresar</Button>
                      </Modal.Footer>
                    </Form>
                  </Modal>

                   {/* Modal Crear cuenta adultos */}
                    <Modal  show={showCrearAdulto}
                              onHide={()=>{setshowCrearAdulto(false)}}>
                        <Modal.Header closeButton>
                          <Modal.Title>Crea una cuenta como padre</Modal.Title>
                        </Modal.Header>
                        <Form onSubmit={(e)=>{crearCuentaAdulto(e)}}>
                          <Modal.Body >
                            <Container>
                              <Form.Group controlId="correo">
                                <Form.Label>Correo</Form.Label>
                                <Form.Control type="email" placeholder="ingresa tu correo" />
                              </Form.Group>

                              <Form.Group controlId="clave">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Contraseña" minLength='6' />
                              </Form.Group>
                              <Form.Group controlId="clave2">
                                <Form.Label>Confirmar contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Confirmar Contraseña" />
                              </Form.Group>
                            </Container>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant='danger' onClick={()=>{setshowCrearAdulto(false)}}>Cancelar</Button>
                            <Button variant="success" type="submit">Crear </Button>
                          </Modal.Footer>
                        </Form>
                      </Modal>

                      {/* Modal Crear cuenta ninos */}
                    <Modal  show={showCrearNino}
                              onHide={()=>{setshowCrearNino(false)}}>
                        <Modal.Header closeButton>
                          <Modal.Title>Crea una cuenta para tu hijo</Modal.Title>
                        </Modal.Header>
                        <Form onSubmit={(e)=>{crearCuentaNino(e)}}>
                          <Modal.Body >
                            <Container>
                              <Form.Group controlId="usuario">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control type="text" placeholder="ingresa un usuario para tu hijo" />
                              </Form.Group>

                              <Form.Group controlId="clave">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Contraseña" minLength='6' />
                              </Form.Group>
                              <Form.Group controlId="clave2">
                                <Form.Label>Confirmar contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Confirmar Contraseña" />
                              </Form.Group>
                            </Container>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant='danger' onClick={()=>{setshowCrearNino(false)}}>Cancelar</Button>
                            <Button variant="success" type="submit">Siguiente </Button>
                          </Modal.Footer>
                        </Form>
                      </Modal>
              </>
            ) : (
              <>
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-2 px-0 px-lg-2 rounded text-black"
                    href="#contact"
                  >
                    Explorar
                  </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <Link
                    to={"/adults"}
                    className="nav-link py-2 px-0 px-lg-2 rounded text-black"
                  >
                    Sección Adultos
                  </Link>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a onClick={()=>{setshowLoginNino(true)}}
                    className="nav-link py-2 px-0 px-lg-2 rounded text-black"
                    href="#contact"
                  >
                    Ingresar
                  </a>
                </li>

                {/* Modal Login niños*/}
                  <Modal  show={showLoginNino}
                          onHide={()=>{setshowLoginNino(false)}}>
                    <Modal.Header closeButton>
                      <Modal.Title>Iniciar</Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={(e)=>{loginNino(e)}}>
                      <Modal.Body >
                        <Container>
                          <Form.Group controlId="usuario">
                            <Form.Label>Tu usuario</Form.Label>
                            <Form.Control type="text" placeholder="ingresa el usuario que creo tu padre" />
                          </Form.Group>

                          <Form.Group controlId="clave2">
                            <Form.Label>Tu contraseña</Form.Label>
                            <Form.Control type="password" placeholder="tu Contraseña" />
                          </Form.Group>
                        </Container>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant='danger' onClick={()=>{setshowLoginNino(false)}}>Cerrar</Button>
                        <Button variant="success" type="submit">ingresar</Button>
                      </Modal.Footer>
                    </Form>
                  </Modal>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
