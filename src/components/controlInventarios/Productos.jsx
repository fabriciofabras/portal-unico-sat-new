import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { getProductos } from '../../helpers/controlInventarios//getProductos';
import { useEffect, useState } from 'react';
import ModalAlta from './ModalAlta';
import { getProductosReduced } from '../../helpers/controlInventarios/getProductosReduced';

export const Productos = () => {

    const isInIframe = window.self !== window.top;

    console.log(isInIframe);

    const [productos, setProductos] = useState([]);

    const [accion, setAccion] = useState()

    const [editMode, setEditMode] = useState(false)

    const [show, setShow] = useState(false);
    const [readOnly, setReadOnly] = useState(false);

    const [idProducto, setIdProducto] = useState('');

    const [busqueda, setBusqueda] = useState('');

    const [filteredData, setFilteredData] = useState([]);

    /*    const productos = [
           {
               tipo: "ISILON",
               noParte: "403-0075-02",
               desc: "HARD DRIVE_1TB 7.2K DISK SATA-300 3.5",
               componente: "Drive",
               sede: "Querétaro",
               ubicacion: "",
               min_stock: 1,
               cantidad: 2,
               max_stock: 3,
               reorden: 3,
               proveedor: "",
               sendor: "",
               pn_vendor: "",
               sn_vendor: "",
               sn_emc: "",
               capacidad: ""
           },
           {
               tipo: "SAN",
               noParte: "403-0075-02",
               desc: "HARD DRIVE_1TB 7.2K DISK SATA-300 3.5",
               componente: "Drive",
               sede: "Querétaro",
               ubicacion: "",
               min_stock: 1,
               cantidad: 2,
               max_stock: 3,
               reorden: 3,
               proveedor: "",
               sendor: "",
               pn_vendor: "",
               sn_vendor: "",
               sn_emc: "",
               capacidad: ""
           },
           {
               tipo: "VMAX",
               noParte: "403-0075-02",
               desc: "HARD DRIVE_1TB 7.2K DISK SATA-300 3.5",
               componente: "Drive",
               sede: "Querétaro",
               ubicacion: "",
               min_stock: 1,
               cantidad: 2,
               max_stock: 3,
               reorden: 3,
               proveedor: "",
               sendor: "",
               pn_vendor: "",
               sn_vendor: "",
               sn_emc: "",
               capacidad: ""
           },
           {
               tipo: "VMAX",
               noParte: "403-0075-02",
               desc: "HARD DRIVE_1TB 7.2K DISK SATA-300 3.5",
               componente: "Drive",
               sede: "Querétaro",
               ubicacion: "",
               min_stock: 1,
               cantidad: 2,
               max_stock: 3,
               reorden: 3,
               proveedor: "",
               sendor: "",
               pn_vendor: "",
               sn_vendor: "",
               sn_emc: "",
               capacidad: ""
           },
           {
               tipo: "VMAX",
               noParte: "403-0075-02",
               desc: "HARD DRIVE_1TB 7.2K DISK SATA-300 3.5",
               componente: "Drive",
               sede: "Querétaro",
               ubicacion: "",
               min_stock: 1,
               cantidad: 2,
               max_stock: 3,
               reorden: 3,
               proveedor: "",
               sendor: "",
               pn_vendor: "",
               sn_vendor: "",
               sn_emc: "",
               capacidad: ""
           },
           {
               tipo: "VMAX",
               noParte: "403-0075-02",
               desc: "HARD DRIVE_1TB 7.2K DISK SATA-300 3.5",
               componente: "Drive",
               sede: "Querétaro",
               ubicacion: "",
               min_stock: 1,
               cantidad: 2,
               max_stock: 3,
               reorden: 3,
               proveedor: "",
               sendor: "",
               pn_vendor: "",
               sn_vendor: "",
               sn_emc: "",
               capacidad: ""
           },
           {
               tipo: "VMAX",
               noParte: "403-0075-02",
               desc: "HARD DRIVE_1TB 7.2K DISK SATA-300 3.5",
               componente: "Drive",
               sede: "Querétaro",
               ubicacion: "",
               min_stock: 1,
               cantidad: 2,
               max_stock: 3,
               reorden: 3,
               proveedor: "",
               sendor: "",
               pn_vendor: "",
               sn_vendor: "",
               sn_emc: "",
               capacidad: ""
           },
           {
               tipo: "VMAX",
               noParte: "403-0075-02",
               desc: "HARD DRIVE_1TB 7.2K DISK SATA-300 3.5",
               componente: "Drive",
               sede: "Querétaro",
               ubicacion: "",
               min_stock: 1,
               cantidad: 2,
               max_stock: 3,
               reorden: 3,
               proveedor: "",
               sendor: "",
               pn_vendor: "",
               sn_vendor: "",
               sn_emc: "",
               capacidad: ""
           },
           {
               tipo: "VMAX",
               noParte: "403-0075-02",
               desc: "HARD DRIVE_1TB 7.2K DISK SATA-300 3.5",
               componente: "Drive",
               sede: "Querétaro",
               ubicacion: "",
               min_stock: 1,
               cantidad: 2,
               max_stock: 3,
               reorden: 3,
               proveedor: "",
               sendor: "",
               pn_vendor: "",
               sn_vendor: "",
               sn_emc: "",
               capacidad: ""
           }
       ]
    */

    const handleShow = (accion, readOnly, id) => {


    }

    const handleSearch = (e) => {
        console.log(e.target.value)
        setBusqueda(e.target.value)

        const filtered = productos.filter(item => Object.values(item).some(value => String(value).toLocaleLowerCase().includes(e.target.value)))
    
        setFilteredData(filtered)
    }

    const openModalForEdit = (id) => {
        setEditMode(true)
        setIdProducto(id)
        setShow(true);
        setAccion('Editar')
    }

    const openModalForCreate = () => {
        setAccion('Agregar')
        setEditMode(false)
        setIdProducto(null)
        setShow(true);
        setReadOnly(readOnly)
    }
    const handleClose = () => setShow(false);


    useEffect(() => {

        if (isInIframe) {
            getProductosReduced()
                .then((res) => {
                    console.log("RES");
                    console.log(res);
                    setProductos(res);
                    setFilteredData(res);
                })
                .catch((e) => {
                    console.log(e.message);
                });
        } else {
            getProductos()
                .then((res) => {
                    console.log("RES");
                    console.log(res);
                    setProductos(res);
                    setFilteredData(res);
                })
                .catch((e) => {
                    console.log(e.message);
                });
        }
    }
        , [show]);

    return (
        <div>
            <ModalAlta isEditMode={editMode} accion={accion} idProducto={idProducto} show={show} handleClose={handleClose} />
            <div className="text-warning h1">Productos</div>
            <Container>
                <Row className="m-4">
                    <Col lg={3}>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Busca un producto"
                                aria-label="Ingresa el producto"
                                aria-describedby="basic-addon2"
                                onChange={handleSearch}
                            />
                            {/* <Button variant="outline-warning" id="button-addon2">
                                Buscar
                            </Button> */}
                        </InputGroup>
                    </Col>
                    <Col lg={6}></Col>
                    <Col lg={3} >
                        {isInIframe ? <></> : <Button variant="warning" onClick={() => openModalForCreate()}>Agregar Producto</Button>}
                    </Col>
                </Row>
            </Container>
            <div class="table-responsive" >
                <Table className="table p-4 small " variant striped bordered hover>
                    <thead>
                        {isInIframe ? (
                            <tr>
                                <th style={{width: "30%"}} >Número de parte</th>
                                <th style={{width: "40%"}}>Descripción</th>
                                <th style={{width: "20%"}}>Ubicación</th>
                                <th style={{width: "10%"}}>Cantidad</th>
                            </tr>) :
                            (<tr style={{fontSize:"12px"}}>
                                <th style={{width: "5%"}}>Tipo</th>
                                <th style={{width: "5%"}}>Número de parte</th>
                                <th style={{width: "10%"}}>Descripción</th>
                                <th style={{width: "10%"}}>Componente</th>
                                <th style={{width: "2%"}}>Sede</th>
                                <th style={{width: "10%"}}>Ubicación</th>
                                <th style={{width: "5%"}}>Stock mínimo</th>
                                <th style={{width: "5%"}}>Cantidad</th>
                                <th style={{width: "5%"}}>Stock máximo</th>
                                <th style={{width: "5%"}}>Reorden</th>
                                <th style={{width: "10%"}}>Proveedor</th>
                                <th style={{width: "5%"}}>Sendor</th>
                                <th style={{width: "5%"}}>Pn Vendor</th>
                                <th style={{width: "5%"}}>Sn Vendor</th>
                                <th style={{width: "5%"}}>Sn EMC</th>
                                <th style={{width: "5%"}}>Capacidad</th>
                                <th className="fixed-col">Editar</th>
                            </tr>)}
                    </thead>
                    <tbody>
                        {isInIframe ? (
                            filteredData.map((producto, index) => (
                                <tr>
                                    <td>{producto.noParte}</td>
                                    <td>{producto.desc}</td>
                                    <td>{producto.ubicacion}</td>
                                    <td>{producto.cantidad}</td>
                                </tr>
                            ))

                        ) : (
                            filteredData.map((producto, index) => (
                                <tr style={{fontSize:"12px"}}>
                                    <td >{producto.tipo}</td>
                                    <td>{producto.noParte}</td>
                                    <td>{producto.desc}</td>
                                    <td>{producto.componente}</td>
                                    <td>{producto.sede}</td>
                                    <td>{producto.ubicacion}</td>
                                    <td>{producto.min_stock}</td>
                                    <td>{producto.cantidad}</td>
                                    <td>{producto.max_stock}</td>
                                    <td>{producto.reorden}</td>
                                    <td>{producto.proveedor}</td>
                                    <td>{producto.sendor}</td>
                                    <td>{producto.pn_vendor}</td>
                                    <td>{producto.sn_vendor}</td>
                                    <td>{producto.sn_emc}</td>
                                    <td>{producto.capacidad}</td>
                                    <td className="fixed-col"><Button onClick={() => openModalForEdit(producto.id)} variant="warning">Editar</Button></td>
                                </tr>
                            ))
                        )
                        }
                    </tbody>
                </Table>
            </div>

        </div>
    )
}