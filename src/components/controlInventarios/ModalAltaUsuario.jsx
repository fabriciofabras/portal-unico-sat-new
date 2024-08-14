import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import { editUsuario } from '../../helpers/controlInventarios/editUsuario';
import { getUsuario } from '../../helpers/controlInventarios/getUsuario';
import { altaUsuario } from '../../helpers/controlInventarios/altaUsuario';


function ModalAltaUsuario({ isEditMode, idUsuario, handleClose, show, accion }) {

  console.log("isEditMode", isEditMode)
  console.log("idUsuario", idUsuario)
  useEffect(() => {
    if (isEditMode && idUsuario !== null) {

      // Llamado al servicio para obtener los datos del usuario por ID
      getUsuario(idUsuario).then((res => {
        console.log("res", res)
        setFormData({
          id: res._id ? res._id : "",
          usuario: res.usuario ? res.usuario : "",
          nombre: res.nombre ? res.nombre : "",
          telefono: res.telefono ? res.telefono : "",
          correo: res.correo ? res.correo : "",
          perfil: res.perfil ? res.perfil : "",
          gobierno: res.gobierno ? res.gobierno : "",
        }
        )
      })).catch((e) => {
        console.log(e.message)
      })

    } else {
      // Limpiar el formulario si es un alta
      setFormData({
        usuario: '',
        nombre: '',
        telefono: '',
        correo: '',
        perfil: '',
        gobierno: '',
      });
    }
  }, [isEditMode, idUsuario]);




  const [formData, setFormData] = useState({
    usuario: '',
    nombre: '',
    telefono: '',
    correo: '',
    perfil: '',
    gobierno: ''
  });

  const altaUsuarios = () => {

    if (isEditMode) {

      editUsuario(formData);
    } else {
      altaUsuario(formData);

    }

    console.log(formData)
    handleClose()
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
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{accion} usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Form.Group as={Col} className="mb-3" >
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  value={formData.usuario}
                  readOnly={isEditMode}
                  name="usuario"
                  type="text"
                  autoFocus
                  onChange={handleChange}
                />

              </Form.Group>
              <Form.Group as={Col} >
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  value={formData.nombre}
                  readOnly={isEditMode}
                  name="nombre"
                  type="text"
                  autoFocus
                  onChange={handleChange}
                />

              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  value={formData.telefono}
                  type="text"
                  name="telefono"
                  autoFocus
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Row>


              <Form.Group as={Col} >

                <Form.Label>Correo</Form.Label>
                <Form.Control
                  value={formData.correo}
                  type="text"
                  name="correo"
                  autoFocus
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} >
                <Form.Label>Perfil</Form.Label>
                <Form.Select                   value={formData.perfil} aria-label="Perfil" name="perfil" onChange={handleChange}>
                <option value="">Selecciona</option>
                <option value="atalait-application-admin">atalait-application-admin</option>
                <option value="sat">sat</option>
                  <option value="atalait-administracion">atalait-administracion</option>
                  <option value="atalait-gestion">atalait-gestion</option>
                  <option value="atalait-consulta">atalait-consulta</option>

                </Form.Select>
                {/*   <Form.Label>Perfil</Form.Label>
                <Form.Control
                  value={formData.perfil}
                  type="text"
                  name="perfil"
                  autoFocus
                  onChange={handleChange}
                /> */}
              </Form.Group>
              <Form.Group as={Col}>
                
              <Form.Label>Gobierno</Form.Label>
                <Form.Select aria-label="Gobierno" name="gobierno" onChange={handleChange} value={formData.gobierno}>
                <option value="">Selecciona</option>
                <option value="cuerpo-gobierno-sari">Cuerpo de Gobierno SARI 2</option>
                <option value="director">Director</option>
                  <option value="director-cuenta">Director de Cuenta</option>
                  <option value="administrador-proyecto">Administrador del Proyecto</option>
                  <option value="csa">CSA</option>
                  <option value="operaciones">Operaciones</option>

                </Form.Select>

              {/*   <Form.Label>Gobierno</Form.Label>
                <Form.Control
                  value={formData.gobierno}
                  type="text"
                  name="gobierno"
                  autoFocus
                  onChange={handleChange}
                /> */}
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col}>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  value={formData.password}
                  type="password"
                  name="password"
                  autoFocus
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Confirmar Contraseña</Form.Label>
                <Form.Control
                  value={formData.password2}
                  type="password"
                  name="password2"
                  autoFocus
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Descartar
          </Button>
          <Button onClick={altaUsuarios} variant="primary" >
            Guardar
          </Button>
        </Modal.Footer>
      </Modal >
    </>
  );
}

export default ModalAltaUsuario;