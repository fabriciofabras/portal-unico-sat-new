import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import ModalAlta from './ModalAlta';
import { UserProfileContext } from '../../UserProfileContext';
import { getServidores } from '../../helpers/cmdb/getServidores';

export const CMDBCustom = ({cmdbTipo}) => {

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
        , [show,cmdbTipo]);

    console.log("Nuevo Servidores", servidores)
    console.log("Filtered Servidores", filteredData)

    const fieldsTable = cmdbTipo.fieldsTable;
    return (
        <div>
            <ModalAlta isEditMode={editMode} accion={accion} idServidor={idServidor} show={show} handleClose={handleClose} />
            <div className="text-warning h1">{cmdbTipo.title}</div>
            <Container>
                <Row className="m-4">
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
                        {(profile === 'atalait-application-admin' || profile === 'atalait-administracion' || profile === 'atalait-gestion') ? (<Button variant="warning" onClick={() => openModalForCreate()}>Agregar Servidor</Button>) : (<div></div>)}
                    </Col>
                </Row>
            </Container>
            <div class="table-responsive" >
                <Table className="table p-4 small " variant striped bordered hover>
                    <thead>
                        <tr>
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
                                    {Object.keys(servidor).map((key) => (
                                        <td key={key}>{servidor[key]}</td>
                                    ))}
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