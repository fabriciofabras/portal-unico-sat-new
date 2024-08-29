import { Card, Image, OverlayTrigger, Stack, Tooltip } from "react-bootstrap"
import { Arrow90degRight, ArrowRight, Basket2, Binoculars, ClipboardCheck, House, PeopleFill } from "react-bootstrap-icons"
import Man from "../../assets/man.png"
import { createContext, useContext } from "react"
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
            {profile === "sat" ? (<div></div>) : (<div className="p-2">
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 0, hide: 400 }}
                    overlay={renderTooltip("Usuarios")}
                >
                    <PeopleFill onClick={() => handleClick(2)} className="icon-link icon-link-hover" href="#" size={50} />
                </OverlayTrigger>
            </div>)}

            <div className="p-2">
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 0, hide: 400 }}
                    overlay={renderTooltip("Productos")}
                >
                    <Basket2 onClick={() => handleClick(1)} className="icon-link icon-link-hover" size={50} />

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