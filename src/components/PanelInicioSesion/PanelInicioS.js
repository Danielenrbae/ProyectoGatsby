import React from 'react';
import CabeceraForm from "../CabeceraForm/CabeceraFormRegistro";
import {Container, Row , Card , Form} from "react-bootstrap";

export default function PanelInicioSesion(){
    return(


        <Container id="panel">
            <Row className="justify-content-center">
                <Card className="text-center border-info">
                
                    <CabeceraForm />

                    <Card.Body>

                        <Card.Title>
                            <h5>¡Bienvenid@ de nuevo!, !Ya te echábamosde menos!</h5>
                        </Card.Title>

                        <br />
                        <Form>
                           
                        </Form>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}