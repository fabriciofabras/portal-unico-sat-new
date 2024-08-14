import { Col, Container, Row } from "react-bootstrap"
import { Menu } from "./Menu"
import { Productos } from "./Productos"
import { useState } from "react"
import { Usuarios } from "./Usuarios"

export const Dashboard = () => {

    const [seleccion, setSeleccion] = useState(1)

  const  onOpcionSeleccionada =(opcion) =>{
        setSeleccion(opcion)
    }


    return (
        <div className="w-100 m-0">
            <Row>
                <Col xl={2} lg={2}>
                    <Menu onOpcionSeleccionada={onOpcionSeleccionada}>

                    </Menu>
                </Col>
                <Col xl={10} lg={9}>

                    {seleccion === 1 && <Productos />}
                    {seleccion === 2 && <Usuarios />}

                </Col>
                <Col>
                </Col>
            </Row>
        </div>
    )
}