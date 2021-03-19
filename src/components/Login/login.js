import React, { useState} from 'react';
import { Nav, NavLink , Button } from 'react-bootstrap';
import "./login.css";


export default function Login(props) {
    var htmlLogin;

    const [estadoLogin, setEstadoLogin] = useState(1); // ESTO ES UNA PRUEBA -- Siempre va salir que hay un usuario conectado y puedes "cerrar sesion" pero si actualizas vuelve de nuevo

    function buttonHandler(){
        alert("Cerrado Sesion");
            setEstadoLogin(0);
        
    }

    if (estadoLogin !== 0) {
        htmlLogin = (
            <div>
                <Nav.Item className="enlace3">Daniel</Nav.Item>
                <Button onClick={buttonHandler} variant="info">Cerrar Sesión</Button>
            </div>
        );
    } else {
        htmlLogin = (<div> <NavLink className="enlace3" href="/iniciosesion">Iniciar Sesión</NavLink>
            <NavLink className="enlace3" href="/registro">Registrarse</NavLink>
        </div>);
    }

    return (
        <div className="login">

            {htmlLogin}

        </div>
    )
}