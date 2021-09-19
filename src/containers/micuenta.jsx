import React, { useContext, useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import Swal from "sweetalert2";
import ModalNewAccount from "../components/modalNewAccount";
import { LoginContext } from "../context/LoginContext";
import { getChildens, getSuscription } from "../firebase/client";
import { setAdult } from "../firebase/client";

function Micuenta() {
  const { datosAdulto } = useContext(LoginContext);
  const [nombre,setNombre]=useState(datosAdulto.nombre);
  const [apellido,setApellido]=useState(datosAdulto.apellido);
  const [hijos,setHijos]=useState([]);
  const [showCrearNino, setShowCrearNino] = useState(false);
  const [suscripcion,setSuscripcion]= useState([]);


  const guardar=async ()=>{
      console.log(nombre);
      console.log(apellido);
    const resultado = await setAdult({
        nombre:nombre,
        apellido:apellido,
        id:datosAdulto.uidinterno
    });
    if(resultado==true){
        Swal.fire({
            title: "Datos actualizados",
            confirmButtonText: "ACEPTAR",
            icon: "success",
        });
    }
  }
 

  useEffect(() => {
    const getNinos =async ()=>{
      const datos =await  getChildens(datosAdulto.uid);
      setHijos(datos);
    }
    getNinos();
    console.log(hijos);

    // const suscription = await getSuscription(datosAdulto.uid);
    // setSuscripcion(suscription)
  }, [hijos,suscripcion,datosAdulto]);

  return (
    <>
      Mis datos
      <form onSubmit={(e)=>{
          e.preventDefault();
          guardar()
      }}>
        <label>
          Name:
        </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => {
              const { value } = e.target;
              setNombre(value);
            }}
          />
        <label>
          Apellido:
        </label>
          <input
            type="text"
            value={apellido}
            onChange={(e) => {
              const { value } = e.target;
              setApellido(value);
            }}
          />
          <button className='btn btn-block btn-success' type='submit'>Guardar</button>
      </form>

      Mis niñxs
      {hijos && hijos.length>0  ?
        <ListGroup>
          {hijos.map((hijo,index)=>{
              return <ListGroup.Item key={index}> {hijo.usuario}</ListGroup.Item>
          })}
      </ListGroup>
      : <h1>no tienes ninx</h1>}
      <button className='btn btn-block btn-success' onClick={()=>{setShowCrearNino(true)}} type='submit'>Agregar ninx</button>

      

        Mi suscripcion
        {suscripcion && suscripcion.lenght>0? 
        <ListGroup>
          {suscripcion.map((sus,index)=>{
              return <ListGroup.Item key={index}>
                 {sus.fechaI}-
                 {sus.tipo}
                 </ListGroup.Item>
          })}
      </ListGroup>
      : <span>aun no estas suscrito </span>}

      {/* modal */}
<ModalNewAccount
        adult={false}
        showCrearNino={showCrearNino}
        setShowCrearNino={setShowCrearNino}
        />
    </>

  );
}

export default Micuenta;
