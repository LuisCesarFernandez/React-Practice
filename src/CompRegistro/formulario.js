import { InputGroup, InputGroupText, Input } from "reactstrap";
import "./formu.css";
import axios from "axios";
import { useState, useEffect } from "react";
export function Formulario() {
  const [datos, setDatos] = useState([]);
  const [id, setId] = useState([]);
  const [nombre, setNombre] = useState([""]);
  const [apellido, setApellido] = useState([""]);
  const [telefono, setTelefono] = useState([""]);
  const [dni, setDni] = useState([""]);
  const [correo, setCorreo] = useState([""]);
  const [Contraseña, setContraseña] = useState([""]);

  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = async () => {
    const respuesta = await axios.get("http://localhost:5211/api/Cliente");
    console.log(respuesta.data);
    setDatos(respuesta.data);
  };

  const agregarCliente = async () => {
    if (btnName === "Registrar Cliente") {
      await axios.post("http://localhost:5211/api/Cliente", {
        nombre,
        apellido,
        telefono,
        correo,
        dni,
        Contraseña,
      });
    } else {
      await axios.put(`http://localhost:5211/api/Cliente/${id}`, {
        id,
        nombre,
        apellido,
        telefono,
        correo,
        dni,
        Contraseña,
      });
    }
    setBtnName("Registrar Cliente");
    setNombre("")
    setApellido("")
    setTelefono("")
    setDni("")
    setCorreo("")
    setContraseña("")
    cargarDatos();
  };

  const eliminarCliente = async (id) => {
    await axios.delete(`http://localhost:5211/api/Cliente/${id}`);
    setDatos(datos.filter((cliente) => cliente.id !== id));
  };

  const modificarCliente = async (id) => {
    const cliente = datos.find((cliente) => cliente.id === id);
    console.log(cliente);
    setId(cliente.id);
    setNombre(cliente.nombre);
    setApellido(cliente.apellido);
    setTelefono(cliente.telefono);
    setDni(cliente.dni);
    setCorreo(cliente.correo);
    setContraseña(cliente.contraseña);
    setBtnName("Actualizar Cliente");
  };

  const [btnName, setBtnName] = useState("Registrar Cliente");
  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }
  return (
    <div className="formu">
      <form className="formulario" onSubmit={handleSubmit}>
        <h1>Regístrate</h1>
        <br></br>
        <InputGroup>
          <InputGroupText>Nombres</InputGroupText>
          <Input
            value={nombre || ""}
            placeholder="Nombre(s)"
            onChange={(e) => setNombre(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <InputGroupText>Apellidos</InputGroupText>
          <Input
            value={apellido || ""}
            placeholder="Apellidos"
            onChange={(e) => setApellido(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <InputGroupText>Teléfono</InputGroupText>
          <Input
            value={telefono || ""}
            placeholder="Teléfono"
            onChange={(e) => setTelefono(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <InputGroupText>DNI</InputGroupText>
          <Input
            value={dni || ""}
            placeholder="DNI"
            onChange={(e) => setDni(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <InputGroupText>Correo</InputGroupText>
          <Input
            value={correo || ""}
            placeholder="Correo"
            onChange={(e) => setCorreo(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <InputGroupText>Contraseña</InputGroupText>
          <Input
            value={Contraseña || ""}
            placeholder="Contraseña"
            type="password"
            onChange={(e) => setContraseña(e.target.value)}
          />
        </InputGroup>
        <br></br>
        <button
          className="btn btn-primary btn-lg"
          onClick={(e) => agregarCliente(e)}
        >
          {btnName}
        </button>
      </form>
      <br></br>
      <br></br>
      <div>
        <table className="table table-bordered tabla">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Telefono</th>
              <th>DNI</th>
              <th>Correo</th>
              <th>ELIMINAR</th>
              <th>MODIFICAR</th>
            </tr>
          </thead>
          <tbody>
            {datos.map((fila) => (
              <tr key={fila.id}>
                <th>{fila.id}</th>
                <td>{fila.nombre}</td>
                <td>{fila.apellido}</td>
                <td>{fila.telefono}</td>
                <td>{fila.dni}</td>
                <td>{fila.correo}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => eliminarCliente(fila.id)}
                  >
                    Eliminar
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => modificarCliente(fila.id)}
                  >
                    Modificar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}