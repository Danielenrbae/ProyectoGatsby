import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./cartaBody.css";


export default function CartaBody(props) {

    var html;

    if (props.orientacion == 1) {

        html = <Container fluid="xxl" className="cont">
            <Row>
                <Col><h2>{props.titulo}</h2></Col>
            </Row>
            <Row className="text">

                <Col xs xl={7}>
                    {props.texto}
                </Col>

                <Col >
                    <img className="imagen" width="60%" src={props.imagen} alt="Imagen" />
                </Col>
            </Row>

        </Container>;
    } else {
        html = <Container fluid="xxl" className="cont">
            <Row>
                <Col><h2>{props.titulo}</h2></Col>
            </Row>
            <Row className="text">

                <Col >
                    <img className="imagen2" width="60%" src={props.imagen} alt="Imagen" />
                </Col>

                <Col xs xl={7}>
                    {props.texto}
                </Col>


            </Row>

        </Container>;
    }



    return (
        
        <div>
            {html}
        </div> 

    )
}