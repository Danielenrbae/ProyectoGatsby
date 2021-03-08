import React from "react";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/Header";
import "../CSS/index.css";
import CartaBody from '../components/CartaBody/cartaBody';


export default function Servicios() {
    return (
        <div>
            <Header />

            <div className="bod">
                <CartaBody titulo="PELUQUERÍA" texto="Corte, baño, trimming, estética... Actualmente nuestro perro es uno más de la familia y por
                            ello es muy importante que esté limpio y con un pelo sano y libre de parásitos.
                            Sólo trabajamos con productos de peluquería canina de la mayor calidad y nuestro
                            estilista canino te asesorará tanto en el caso de que exista algún problema
                            (seborrea, dermatitis alérgica, otitis...) como para aconsejarte sobre el cuidado del
                            pelo y piel de tu perro." imagen="https://raw.githubusercontent.com/Danielenrbae/Danielenrbae.github.io/master/img/Galeria/Galeria5.webp" orientacion="1"/>

                <CartaBody titulo="ADOPCIONES" texto="Adoptar una mascota supone una gran oportunidad. Se trata de salvar una vida que
                            realmente te necesita. Además, nosotros nos encargamos de que estés bien
                            informado durante todo el proceso de forma que sepas todo lo que debes hacer en
                            cada paso para tener un animal feliz y saludable." imagen="https://raw.githubusercontent.com/Danielenrbae/Danielenrbae.github.io/master/img/Galeria/Galeria7.webp" orientacion="2"/>

                <CartaBody titulo="TIENDA" texto="En nuestra clínica encontrará nuestra tienda dedicada a las mascotas. Encontrará
                            todo tipo de accesorios para cuidar, pasear o bañar a su mascota, así como una
                            gran gama de alimentación de las mejores marcas" imagen="https://raw.githubusercontent.com/Danielenrbae/Danielenrbae.github.io/master/img/Galeria/Galeria9.webp" orientacion="1"/>

                <CartaBody titulo="ADIESTRAMIENTO" texto="Con nosotros aprenderás a educar a tu perro o gato entendiendo, primero, el
                            comportamiento canino y felino, descubriendo cómo interpretar su lenguaje y las
                            señales que emiten para indicar todas sus emociones. Navega entre los cientos de
                            artículos que compartimos sobre modificación de conducta, órdenes básicas,
                            ejercicios, actividades y técnicas de adiestramiento." imagen="https://raw.githubusercontent.com/Danielenrbae/Danielenrbae.github.io/master/img/Galeria/Galeria10.webp" orientacion="1"/>

            </div>


            <Footer/>
        </div>
    )
}
