import Card from "./card";
import ContactForm from "./contactForm";
import React,{useState}  from "react";
import Section from "./section";
import compass from "../images/compass.png";
import logo_wampuk_sf from "../images/logo_wampuk_sf.png";
import paper from "../images/paper.png";
import useWindowDimensions from "../hooks/useWindowDimensions";
import {db} from '../Firebase';
import {Modal,Form,Container,Button} from 'react-bootstrap';
import swal from 'sweetalert';

const Main = ({ adult = false }) => {

  const { width } = useWindowDimensions();
  let[showLoginNino,setshowLoginNino]=useState(false);
  let[datosNino,setDatosNino]=useState([]);
  let[autenticadoNino,setAutenticadoNino]=useState(false);
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

  return (
    <div className={`masthead pb-0`}>
      {adult ? (
        <>
          <div
            className="container text-center"
            style={{
              padding: width < 902 ? 20 : 30,
            }}
          >
            <img
              src={logo_wampuk_sf}
              title="Wampuk"
              alt="Wampuk"
              style={{ width: "80%", maxWidth: 250 }}
              className=""
            />
          </div>{" "}
          <div className={"bg-wampuk text-white"}>
            <Section
              title={`¿Qué es Wampuk?`}
              text={`Wampuk es una plataforma online en español dirigida para niños de 8 a 12 años que quieren aprender por su propia decisión conocimientos accionables que les sirvan en su vida diaria (habilidades blandas). Wampuk utiliza como herramientas principales la gamificación y el contenido audiovisual de calidad accesibles de una manera que provean una metodología de enseñanza comprometedora.`}
              titleCenter={true}
            />
          </div>
          <div className={"bg-cyan-claro"}>
            <Section
              title={`Nuestros cursos`}
              text={`Nuestros cursos se enfocan en desarrollar las habilidades blandas de los niños(as), ten la certeza que tu hijo(a) aprenderá contenido que le servirá para mejorar su vida diaria y contribuir a su desarrollo creativo y emocional. Además nuestros cursos, contienen una mezcla de contenido pregrabado, gamificación y comprobación del aprendizaje. Todos nuestros cursos están pensados con nuestra metodología comprometedora, nuestra idea es aumentar la tasa de cursos terminados.`}
              action={"Ver cursos"}
              titleCenter={true}
            />
          </div>
          <div className={"bg-gray1 text-white"}>
            <Section title={`Nuestros educadores`} className={"text-white"} />
          </div>
          <div className={"bg-morado-claro"}>
            <Section
              title={`Elige tu modelo de suscripción`}
              text={`Nuestros cursos se enfocan en desarrollar las habilidades blandas de los niños(as), ten la certeza que tu hijo(a) aprenderá contenido que le servirá para mejorar su vida diaria y contribuir a su desarrollo creativo y emocional. Además nuestros cursos, contienen una mezcla de contenido pregrabado, gamificación y comprobación del aprendizaje. Todos nuestros cursos están pensados con nuestra metodología comprometedora, nuestra idea es aumentar la tasa de cursos terminados.`}
              action={"Ver suscripciones"}
              titleCenter={true}
            />
          </div>
          <ContactForm />
        </>
      ) : (
        <>
          <div className={"bg-violeta-claro text-center p-5"}>
            <img
              src={logo_wampuk_sf}
              title="Wampuk"
              alt="Wampuk"
              style={{ width: 250 }}
              className=""
            />
            <div
              className="bg-gray1 text-white mt-5"
              style={{
                padding: 22,
                margin: "auto",
                maxWidth: 750,
                width: "90%",
              }}
            >
              <p className="fw-bold mb-0" style={{ fontSize: 40 }}>
                ¡Bienvenido a Wampuk!
              </p>
            </div>
          </div>
          <div
            className={"p-1 pt-4 pb-4"}
            style={{ backgroundColor: "#C4E9E5" }}
          >
            <div className="container">
              <div className="row">
                {!autenticadoNino ? (<>
                <div className="col-sm-6">
                  <a onClick={()=>{setshowLoginNino(true)}}>
                  <Card 
                    title={`INICIA SESIÓN`}
                    text={`Inicia sesión para acceder a tus cursos y navegar por Wampuk.`}
                    img={paper}
                  />
                  </a>
                </div>
                
                </>) :null}
                <div className="col-sm-6">
                  <Card 
                    title={`EXPLORAR`}
                    text={`Descrubre diferentes cursos y diviértete aprendiendo.`}
                    img={compass}
                  />
                </div>
              </div>
            </div>
          </div>
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
    </div>
  );
};

export default Main;
