import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import CartaBody from "../components/CartaBody/cartaBody";
import "../CSS/index.css";


export default function Home() {

  var carta1 = {
    titulo: "BIENVENIDOS",
    texto: "Bienvenidos, al centro Clinico Veterinario Go Animals de la provincia de Cádiz. Apasionados por el bienestar de los animales de compaía, nuestro hispital veterinario en Cádiz ofrece servicios de calidad, aportando nuestro mejor equipo técnico y humano con instalaciones innovadoras que ofrecen lo mejor para la salud de las mascotas.",
    imagen: "https://raw.githubusercontent.com/Danielenrbae/Danielenrbae.github.io/master/img/Galeria/Galeria1.webp"
  }

  var carta2 = {
    titulo: "CONÓCENOS",
    texto: "Clínica Veterinaria Go Animals cuenta con unos de los mejores equipamientos de la provincia. Estamos especializados en el diagnóstico, tratamiento y asesoramiento de problemas de salud de todo tipo de animales domésticos. También te asesoraremos sobre el tipo de alimentación y los cuidados más adecuados para tu mascota.",
    imagen: "https://raw.githubusercontent.com/Danielenrbae/Danielenrbae.github.io/master/img/Galeria/Galeria2.webp"
  }

  var carta3 = {
    titulo: "Extra",
    texto: "Contamos con instalaciones amplias y modernas adecuadas para diagnosticar y tratar un amplio abanico de enfermedades y en nuestra tienda podrás encontrar todo lo necesario para la estética, limpieza, nutrición, transporte y ocio de tu animal de compañía. Disponemos de una variedad de servicios como peluquería canina, adiestramiento y adopción.",
    imagen: "https://raw.githubusercontent.com/Danielenrbae/Danielenrbae.github.io/master/img/Galeria/Galeria3.webp"
  }


  return (
    <div>
      <Header />

      <div className="bod">
        <CartaBody titulo={carta1.titulo} texto={carta1.texto} imagen={carta1.imagen} orientacion="1" />

        <CartaBody titulo={carta2.titulo} texto={carta2.texto} imagen={carta2.imagen} orientacion="2" />

        <CartaBody titulo={carta3.titulo} texto={carta3.texto} imagen={carta3.imagen} orientacion="1" />

      </div>


      <Footer />
    </div>
  )
}
