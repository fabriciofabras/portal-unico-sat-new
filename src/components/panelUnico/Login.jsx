
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
  const [sesionActiva, setSesionActiva] = useState(false);
  const [idSesion,setIdSesion] = useState("")
  let confirmacionLoggeoNuevo;

  const validarUsuario =(confirmNewSession, userId)=>{

    validateUser(formData,confirmNewSession, userId)
    .then((res) => {
      console.log("RES");
      console.log(res);

      if (res.message === "El usuario ha sido logueado") {
        setProfile(res)
        handleLogueado(true);
      } else {

        if (res.message === "El usuario ya se encuentra loggeado,¿Desea iniciar sesión en esta ventana?") {
          setProfile(res)
          setSesionActiva(true);
        }
        setError(res.message);
      }

    })
    .catch((e) => {
      console.log(e.message);
    });

  }

  const login = (e) => {
    console.log('login')

    e.preventDefault();

    const clientID = "105019582790-c43fl7shjp4uctt9r4e1iqauapmu61i1.apps.googleusercontent.com";  // Reemplaza con tu Client ID
const redirectUri = "http://localhost:3000/stockdepartes"; // Reemplaza con tu URL de redirección
const scope = "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email";
const responseType = "token"; // O "code" si planeas usarlo en el backend para obtener el token de acceso
const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientID}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}&include_granted_scopes=true`;

// Redirigir a la página de autenticación de Google
window.location.href = authUrl;

   // validarUsuario(false);
  }

  const handleChange = (e) => {

    console.log(e.target)
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleConfirmSesion = () =>{

      validarUsuario(true, profile.usuarioSesion._id)
      
      console.log("handleConfirmSesion",profile.usuarioSesion._id)
  }

  const handleCancelSesion = () =>{
    setSesionActiva(false);
    setError("");

  }

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
              {sesionActiva ? (<div>
                <Row>
                  <Col className="text-align-center">
                  <Button onClick={handleConfirmSesion} className="m-3" >Si</Button>
                  <Button onClick={handleCancelSesion} className="m-3">No</Button>

                  </Col>
                  <Col>
                  </Col>
                </Row>
              </div>) : <div></div>}
            </Form>
          </div>
        </Col >
      </Row>
    </Container>



  );

}