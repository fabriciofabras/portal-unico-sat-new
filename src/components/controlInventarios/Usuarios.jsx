import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from 'react-bootstrap';
import { getUsuarios } from '../../helpers/controlInventarios/getUsuarios';
import { useEffect, useState } from 'react';
import ModalAltaUsuario from './ModalAltaUsuario';

export const Usuarios = () => {

    console.log("window.self,window.top")
    console.log(window.self,window.top)

    const isInIframe = window.self !== window.top;

    console.log(isInIframe);

    const [usuarios, setUsuarios] = useState([]);

    const [accion, setAccion] = useState()

    const [editMode, setEditMode] = useState(false)

    const [show, setShow] = useState(false);
    const [readOnly, setReadOnly] = useState(false);

    const [idUsuario, setIdUsuario] = useState('');

    const openModalForEdit = (id) => {
        setEditMode(true)
        setIdUsuario(id)
        setShow(true);
        setAccion('Editar')
    }

    const openModalForCreate = () => {
        setAccion('Agregar')
        setEditMode(false)
       // setIdProducto(null)
        setShow(true);
        setReadOnly(readOnly)
    }
    const handleClose = () => setShow(false);


    useEffect(() => {

        if (isInIframe) {
            getUsuarios()
                .then((res) => {
                    console.log("RES");
                    console.log(res);
                    setUsuarios(res);
                })
                .catch((e) => {
                    console.log(e.message);
                });
        } else {
            getUsuarios()
                .then((res) => {
                    console.log("RES");
                    console.log(res);
                    setUsuarios(res);
                })
                .catch((e) => {
                    console.log(e.message);
                });
        }
    }
        , [show]);

    return (
        <div>
            <ModalAltaUsuario isEditMode={editMode} accion={accion} idUsuario={idUsuario} show={show} handleClose={handleClose} />
            <div className="text-warning h1">Usuarios</div>
            <Container>
                <Row className="m-4">
                    <Col lg={3}>
                    </Col>
                    <Col lg={6}></Col>
                    <Col lg={3} >
                    <Button variant="warning" onClick={() => openModalForCreate()}>Nuevo Usuario</Button>
                    </Col>
                </Row>
            </Container>
            <div class="table-responsive" >
                <Table className="table p-4 small " variant striped bordered hover>
                    <thead>
                       <tr style={{fontSize:"12px"}}>
                                <th style={{width: "15%"}}>Usuario</th>
                                <th style={{width: "15%"}}>Nombre</th>
                                <th style={{width: "10%"}}>Teléfono</th>
                                <th style={{width: "15%"}}>Correo</th>
                                <th style={{width: "15%"}}>Perfil</th>
{/*                                 <th style={{width: "15%"}}>Password</th>
 */}                                <th className="fixed-col">Editar</th>
                            </tr>
                    </thead>
                    <tbody>
                       
                           { usuarios.map((usuario, index) => (
                                <tr style={{fontSize:"12px"}}>
                                    <td >{usuario.usuario}</td>
                                    <td>{usuario.nombre}</td>
                                    <td>{usuario.telefono}</td>
                                    <td>{usuario.correo}</td>
                                    <td>{usuario.perfil}</td>
{/*                                     <td>{usuario.ubicacion}</td>
 */}                                    <td className="fixed-col"><Button onClick={() => openModalForEdit(usuario.id)} variant="warning">Editar</Button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>

        </div>
    )
}