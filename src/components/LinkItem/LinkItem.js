import React from 'react';
import {NavItem , NavLink, Col} from 'react-bootstrap';
import "./linkitem.css";
export default function LinkItem(props){
    return(

        <Col>
            <NavItem>
                <NavLink className="item" href={props.link}>{props.nombreLink}</NavLink>
            </NavItem>
        </Col>
    );
}