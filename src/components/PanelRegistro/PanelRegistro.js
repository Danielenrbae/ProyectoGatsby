import React from 'react';
import { Container, Row, Card, Nav, Form, FormControl, FormGroup } from 'react-bootstrap';
import "./panelregistro.css";
import CabeceraForm from '../CabeceraForm/CabeceraFormRegistro';


export default function PanelRegistro() {
    return (
        <Container id="panel">
            <Row className="justify-content-center">
                <Card className="text-center border-info">
                
                    <CabeceraForm />

                    <Card.Body>

                        <Card.Title>
                            <h5>¡Bienvenid@, registrate para unirte a nosotros!</h5>
                        </Card.Title>

                        <br />
                        <Form>
                            <Form.Group>
                                <label htmlFor="nombre">
                                    <span>*</span> Nombre:
                                </label>
                                <FormControl name="nombre" required>
                                </FormControl>

                            </Form.Group>

                            <Form.Group>
                                <label htmlFor="apellidos">
                                    <span>*</span> Apellidos:
                                </label>
                                <FormControl name="apellidos" required>
                                </FormControl>

                            </Form.Group>

                            <Form.Group>
                                <label htmlFor="telefono">
                                    <span>*</span> Teléfono:
                                </label>
                                <FormControl name="telefono" required>
                                </FormControl>

                            </Form.Group>

                            <Form.Group>
                                <label htmlFor="email">
                                    <span>*</span> Email:
                                </label>
                                <FormControl name="email" required>
                                </FormControl>

                            </Form.Group>

                            <Form.Group>
                                <label htmlFor="pass">
                                    <span>*</span> Contraseña:
                                </label>
                                <FormControl name="pass" type="password" required>
                                </FormControl>

                            </Form.Group>

                            <Form.Group>
                                <label htmlFor="pass2">
                                    <span>*</span> Confirmar contraseña:
                                </label>
                                <FormControl name="pass2" type="password" required>
                                </FormControl>

                            </Form.Group>

                            <FormGroup>
                                <input type="checkbox" name="check" />
                                <label htmlFor="check"><span> *</span>Acepto la política de privacidad</label>
                            </FormGroup>

                            <input type="submit" value="CREAR CUENTA"/>

                        </Form>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
}