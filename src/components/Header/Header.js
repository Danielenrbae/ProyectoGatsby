import React from 'react';
import { Link } from 'gatsby';
import { Col, Container, Row } from 'react-bootstrap';
import "./header.css";
import Menu from '../Menu/menu';
import Login from '../Login/login';


export default function Header() {

    return (
        <Container fluid >

            
            <Row className="cabecera">
                <Col>
                    <article className="imageBox">
                        <Link to="/">
                            <img className="img-fluid" src="https://raw.githubusercontent.com/Danielenrbae/Danielenrbae.github.io/master/img/Logo_GoAnimals.webp" alt="Logo Go Animals" />
                        </Link>
                    </article>
                </Col>
                <Col>
                    <h1 id="titulo"> Clínica <br /> Veterinaria Go Animals </h1>
                </Col>

                <Col>
                 <Login />
                </Col>
            </Row>
            <Row>
                <Menu/>
            </Row>
        </Container>

    );

}