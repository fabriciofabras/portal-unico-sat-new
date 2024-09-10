import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import ModalAlta from './ModalAlta';
import { UserProfileContext } from '../../UserProfileContext';
import { getServidores } from '../../helpers/cmdb/getServidores';

export const CMDBCustom = ({ cmdbTipo }) => {

    console.log("CMDs TIPO", cmdbTipo)

    const { profile } = useContext(UserProfileContext);

    const isInIframe = window.self !== window.top;

    console.log(isInIframe);

    const [servidores, setServidores] = useState([]);

    const [accion, setAccion] = useState()

    const [editMode, setEditMode] = useState(false)

    const [show, setShow] = useState(false);
    const [readOnly, setReadOnly] = useState(false);

    const [idServidor, setIdServidor] = useState('');

    const [busqueda, setBusqueda] = useState('');

    const [filteredData, setFilteredData] = useState([]);

    const handleSearch = (e) => {
        setBusqueda(e.target.value)

        const filtered = servidores.filter(item => Object.values(item).some(value => String(value).toLocaleLowerCase().includes(e.target.value)))

        setFilteredData(filtered)
    }

    const openModalForEdit = (id) => {
        setEditMode(true)
        setIdServidor(id)
        setShow(true);
        setAccion('Editar')
    }

    const openModalForCreate = () => {
        setAccion('Agregar')
        setEditMode(false)
        setIdServidor(null)
        setShow(true);
        setReadOnly(readOnly)
    }
    const handleClose = () => setShow(false);


    useEffect(() => {

        getServidores(cmdbTipo.table)
            .then((res) => {
                console.log("RES");
                console.log(res);
                setServidores(res);
                setFilteredData(res);
            })
            .catch((e) => {
                console.log(e.message);
            });

    }
        , [show, cmdbTipo]);

    console.log("Nuevo Servidores", servidores)
    console.log("Filtered Servidores", filteredData)

    const fieldsTable = cmdbTipo.fieldsTable;
    return (
        <div className="container">
            <ModalAlta isEditMode={editMode} accion={accion} idServidor={idServidor} show={show} handleClose={handleClose} />
            <div className="fixed-section">
                <div className="text-warning h1">{cmdbTipo.title}</div>
                <Container>
                    <Row className="m-1">
                        <Col lg={3}>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder={`Busca ${cmdbTipo.titleSingular}`}
                                    aria-label="Ingresa el servidor"
                                    aria-describedby="basic-addon2"
                                    onChange={handleSearch}
                                />
                            </InputGroup>
                        </Col>
                        <Col lg={6}></Col>
                        <Col lg={3} >
                            {/*                             {(profile.perfil === 'atalait-application-admin' || profile.perfil === 'atalait-administracion' || profile.perfil === 'atalait-gestion') ? (<Button variant="warning" onClick={() => openModalForCreate()}>Agregar Servidor</Button>) : (<div></div>)}
 */}                        </Col>
                    </Row>
                </Container>
            </div>
            <div class="table-responsive" className="scrollable-section table-container">
                <Table className="table p-1 small " variant striped bordered hover>
                    <thead className="table-header">
                        <tr style={{fontSize: "12px"}}>
                            {fieldsTable.map((field, index) => (
                                <th key={index}>{field}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {/*  {profile === 'sat' ? (
                            filteredData.map((servidor, index) => (
                                <tr>
                                    <td>{servidor.nombre}</td>

                                </tr>
                            ))

                        ) : ( */}
                        {filteredData.map((servidor, index) => (
                            <tr key={index}>
                                {servidor.estadoCI === 'Fuera de servicio' || servidor.estadoCI === 'Fuera de Servicio' ? (
                                     
                                        Object.keys(servidor).map((key) => (
                                            <td style={{ fontSize: "12px", backgroundColor: '#C0392B', color:'white'}} key={key}>{servidor[key]}</td>
                                        ))
                                    
                                ) : (
                                    Object.keys(servidor).map((key) => (
                                        <td style={{ fontSize: "12px"}} key={key}>{servidor[key]}</td>
                                    ))
                                
                                )}


                                   
                            </tr>
                        ))}
                        {/*  )
                        } */}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}