
import React, { useContext, useState } from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form"
import { validateUser } from '../../helpers/panelUnico/validateUser';
import { UserProfileContext } from "../../UserProfileContext";

export const Login = ({ handleLogueado }) => {

  const { profile, setProfile } = useContext(UserProfileContext);

  const [formData, setFormData] = useState({
    usuario: "",
    password: ""
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const login = (e) => {
    console.log('login')

    e.preventDefault();

    validateUser(formData)
      .then((res) => {
        console.log("RES");
        console.log(res);

        if (res.message === "El usuario ha sido logueado") {
          setProfile(res.perfil)
          handleLogueado(true); 
        }else{
          setError(res.message);
        }

      })
      .catch((e) => {
        console.log(e.message);
      });
  }

  const handleChange = (e) => {

    console.log(e.target)
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  return (
    <Container fluid className="d-flex align-items-center justify-content-center min-vh-100">
      <Row className="w-100 justify-content-center">
      <Col xs={12} md={6} lg={4}>
      <div className="border p-4 rounded bg-light shadow">
      <h2 className="text-center mb-4">Panel Único de Administración del Servicio SARI2 Partida 1</h2>
          <Form onSubmit={login}>
            <Form.Group className="mb-3" >
              <Form.Label>Email/usuario</Form.Label>
              <Form.Control
                value={formData.usuario}
                name="usuario"
                type="text"
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                value={formData.password}
                name="password"
                type="password"
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>

            <Button type="submit" variant="primary" className="w-100 mt-4">
              Login
            </Button>
            {error && <p className="text-danger mt-3">{error}</p>}
            {success && <p className="text-success mt-3">{success}</p>}
          </Form>
          </div>
        </Col > 
        </Row>
    </Container>



  );

}