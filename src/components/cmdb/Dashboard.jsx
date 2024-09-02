import { Col, Container, Row } from "react-bootstrap"
import { Menu } from "./Menu"
import { CMDBCustom } from "./CMDBCustom"
import { useState } from "react"
import { Usuarios } from "./Usuarios"
import { itemsCmdb } from "./itemsCmdb"

export const Dashboard = () => {

    const [seleccion, setSeleccion] = useState(0)

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

                 <CMDBCustom cmdbTipo={itemsCmdb[seleccion]} />
                </Col>
                <Col>
                </Col>
            </Row>
        </div>
    )
}