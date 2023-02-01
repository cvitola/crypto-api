import React from 'react';
import styled from 'styled-components';
import { FaFacebookMessenger, FaWhatsapp, FaLinkedin, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
        <h2>Contactame</h2>
        <ul>
            <li><FaFacebookMessenger/></li>
            <li><FaWhatsapp /></li>
            <li><FaLinkedin /></li>
            <li><FaTelegram /></li>
        </ul>
        <p>hecho con 💖 por Cristian Vitola</p>
    </Container>
  )
}

export default Footer;

const Container = styled.footer`
    background: #2A2A2A;
    color: #FAFAFA;
    margin-top: auto;
    font-family: 'Patua One', cursive;
    text-align: center;
    width: 100%;

    h2{
        font-size: calc(4vw + 4vh + 2vmin);
        padding: 10px;
        margin: 10px;
    }
    ul{
        list-style: none;
        display: flex;
        justify-content: center;
        padding: 0;
        margin: 0;
        font-size: calc(2vw + 2vh + 1vmin);
    }

    ul li{
        padding: 15px;
    }

    p{
        margin: 20px 0 20px 0;
    }
    `;

