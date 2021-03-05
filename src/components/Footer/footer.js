import React from 'react';
import { Container, Row, Col, Nav, NavLink } from 'react-bootstrap';
import "./footer.css"


export default function Footer() {
    return (

        <Container fluid className="foot1">

            <Container>
                <Row className="row">
                    <Col>
                        <h4>CONÓCENOS</h4>
                        <Nav className="flex-column">
                            <NavLink className="enlace" href="/">Bienvenida</NavLink>
                            <NavLink className="enlace" href="/">Conócenos</NavLink>
                            <NavLink className="enlace" href="/">Contacta con nosotros</NavLink>
                        </Nav>
                    </Col>

                    <Col>
                        <h4>SERVICIOS</h4>
                        <Nav className="flex-column">
                            <NavLink className="enlace" href="/servicios">Peluquería</NavLink>
                            <NavLink className="enlace" href="/servicios">Adopción</NavLink>
                            <NavLink className="enlace" href="/servicios">Tienda</NavLink>
                            <NavLink className="enlace" href="/servicios">Adiestramiento</NavLink>
                        </Nav>
                    </Col>

                    <Col>
                        <h4>COMPRAS</h4>
                        <Nav className="flex-column">
                            <NavLink className="enlace" href="/tienda">Ofertas del mes</NavLink>
                            <NavLink className="enlace" href="/tienda">Articulos</NavLink>
                        </Nav>
                    </Col>

                    <Col>
                        <h4>CONTÁCTANOS</h4>
                        <Nav className="flex-column">
                            <NavLink className="enlace" href="/">Lunes a viernes: 9:30 a 18:30</NavLink>
                            <NavLink className="enlace" href="/">
                                <svg width="1em" height="1em" viewBox="0 0 16 16"
                                    class="bi bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z" />
                                </svg>
                                 654 789 765 <span class="badge badge-secondary"> GRATIS </span>
                            </NavLink>
                            <NavLink className="enlace" href="mailto:a20enrbaed4773@ies-mardecadiz.com"><strong>Escríbenos</strong></NavLink>

                        </Nav>
                    </Col>
                </Row>

            </Container>
            <hr id="lineaBlanca"></hr>

            <Container>
                <Row>
                    <Nav>
                        <NavLink className="enlace2">Aviso Legal</NavLink>
                        <NavLink className="enlace2">Derecho de propiedad</NavLink>
                        <NavLink className="enlace2">Política de privacidad</NavLink>
                        <NavLink className="enlace2">Legislación aplicable</NavLink>
                    </Nav>
                </Row>

            </Container>

            <Row id="derechos">
                Todos los derechos reservados 2020 Clínica VETERINARIA GO
                ANIMALS. CÁDIZ
            </Row>


        </Container>
    )
} 