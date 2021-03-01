import React from 'react';
import {Nav , Card} from 'react-bootstrap';

export default function CabeceraForm() {
    return (

        <Card.Header>
        <Nav variant="tabs">
            <Nav.Item className="registro" >
                <Nav.Link href="/registro"> REGISTRATE </Nav.Link>
            </Nav.Item>

            <Nav.Item className="iniciosesion">
                <Nav.Link href="/iniciosesion"> INICIA SESIÓN </Nav.Link>
            </Nav.Item>
        </Nav>
    </Card.Header>

    );
}