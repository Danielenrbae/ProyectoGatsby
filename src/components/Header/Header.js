import React from 'react';
import { Link } from 'gatsby';
import { Col, Container, Row } from 'react-bootstrap';
import "./header.css";
import Menu from '../Menu/menu';


export default function Header() {

    return (

        <Container fluid >

            <Row className="cabecera">

                <Col>
                    <article className="imageBox">
                        <Link to="/">
                            <img className="img-fluid" src="https://github.com/Danielenrbae/Danielenrbae.github.io/blob/master/img/Logo_GoAnimals.png?raw=true" alt="Logo Go Animals" />
                        </Link>
                    </article>
                </Col>

                <Col>
                    <h1 id="titulo"> Clínica <br /> Veterinaria Go Animals </h1>
                </Col>

                

            </Row>

            <Row>
                <Menu/>
            </Row>



        </Container>

    );

}