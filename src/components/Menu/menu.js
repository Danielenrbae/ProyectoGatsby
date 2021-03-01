import React from 'react';
import { Container, Nav} from 'react-bootstrap';
import "./menu.css";
import LinkItem from '../LinkItem/LinkItem';

export default function Menu(){
    return (

        <Container fluid className="barraNavegacion">

                <Nav className="" activeKey="/">
                    <LinkItem link="/" nombreLink="Home"/>
                    <LinkItem link="/citas" nombreLink="Citas"/>
                    <LinkItem link="/servicios" nombreLink="Servicios"/>
                    <LinkItem link="/tienda" nombreLink="Tienda"/>
                    <LinkItem link="/contacto" nombreLink="Contacto"/>
                </Nav>
        </Container>


    )
}