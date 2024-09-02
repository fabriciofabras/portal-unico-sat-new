import {  OverlayTrigger, Stack, Tooltip } from "react-bootstrap"
import {  Database, Server, Globe } from "react-bootstrap-icons"
import { useContext } from "react"
import { UserProfileContext } from "../../UserProfileContext"

export const Menu = ({ onOpcionSeleccionada }) => {

    const { profile } = useContext(UserProfileContext);


    console.log('user', profile)

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {props}
        </Tooltip>
    );

    const handleClick = (opcion) => {
        console.log("handleclick", opcion)
        onOpcionSeleccionada(opcion);
    };

    return (
        <Stack>
            <div>

                {/* <Card
                    bg={"white"}
                    key={"warning"}
                    text={"warning"}

                    
                >
                    <Card.Header><Image src={Man} roundedCircle className="w-100"/></Card.Header>
                    <Card.Body>
                        <Card.Title>Fabricio Hernández </Card.Title>

                    </Card.Body>
                </Card> */}


            </div>
         {/*  <div className="p-2" >
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 0, hide: 400 }}
                    overlay={renderTooltip('Inicio')}
                >
                    <House className="icon-link icon-link-hover" size={50} ></House>
                </OverlayTrigger>

            </div>*/}
               <div className="p-2">
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 0, hide: 400 }}
                    overlay={renderTooltip("Servidores")}
                >
                    <Server onClick={() => handleClick(0)} className="icon-link icon-link-hover" href="#" size={50} />
                </OverlayTrigger>
            </div>

            <div className="p-2">
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 0, hide: 400 }}
                    overlay={renderTooltip("Almacenamiento")}
                >
                    <Database onClick={() => handleClick(1)} className="icon-link icon-link-hover" size={50} />

                </OverlayTrigger>
            </div>

            <div className="p-2">
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 0, hide: 400 }}
                    overlay={renderTooltip("Telecomunicaciones")}
                >
                    <Globe onClick={() => handleClick(2)} className="icon-link icon-link-hover" href="#" size={50} />
                </OverlayTrigger>
            </div>
           {/* <div className="p-2 align-items-center">
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 0, hide: 400 }}
                    overlay={renderTooltip("Solicitud")}
                >

                    <ClipboardCheck className="icon-link icon-link-hover" size={50} />
                </OverlayTrigger>
            </div>
            <div className="p-2">
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 0, hide: 400 }}
                    overlay={renderTooltip("Tracking")}
                >

                    <Binoculars className="icon-link icon-link-hover" size={50} />
                </OverlayTrigger>
            </div>
            <div className="p-2">
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 0, hide: 400 }}
                    overlay={renderTooltip("Salir")}
                >

                    <ArrowRight className="icon-link icon-link-hover" size={50} />
                </OverlayTrigger>
            </div>*/}
        </Stack>
    )
}