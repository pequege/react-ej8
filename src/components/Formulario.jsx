import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Swal from 'sweetalert2';

const Formulario = () => {
  const submitHandler = (e) =>{
    e.preventDefault();
    if(nombre ==="" || apellido ==="" || dni ==="" || email ===""){
      Swal.fire({
        title: 'Error!',
        text: 'Completar los datos 😠',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    } else{
      Swal.fire({
        title: 'Éeexitooo',
        text: ':)',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    }
  }

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDNI] = useState("");
  const [email, setEmail] = useState("");
  const [lineasFormulario, setLineasFormulario] = useState([]);

  return (
    <>
      <Form className="p-3">
        <Form.Group className="mb-3" controlId="inputNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ej: Juan" 
          onChange={(e) => setNombre(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="inputApellido">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Ej: Pérez" 
          onChange={(e) => setApellido(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="inputDNI">
          <Form.Label>DNI</Form.Label>
          <Form.Control type="number" placeholder="99.999.999" minLength={7}
          onChange={(e) => setDNI(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="inputEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="su-email@dominio.com" 
          onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={submitHandler}>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Formulario;
