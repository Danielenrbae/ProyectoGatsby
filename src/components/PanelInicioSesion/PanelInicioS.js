import React from 'react';
import CabeceraForm from "../CabeceraForm/CabeceraFormRegistro";
import { Container, Row, Card, Form, FormCheck, FormControl} from "react-bootstrap";

export default function PanelInicioSesion() {
    return (


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

                            <Form.Group>
                                <label htmlFor="nombre">
                                    <span>*</span> Email:
                                </label>
                                <FormControl name="email" required>
                                </FormControl>

                            </Form.Group>

                            <Form.Group>
                                <label htmlFor="pass">
                                    <span>*</span> Contraseña:
                                </label>
                                <FormControl name="pass" required>
                                </FormControl>

                            </Form.Group>

                            <Form.Group>
                                <FormCheck>
                                    <FormCheck.Input />
                                    <FormCheck.Label> Recuérdame.</FormCheck.Label>
                                </FormCheck>
                            </Form.Group>

                            <input type="submit" value="ENTRAR"/>

                            

                        </Form>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}