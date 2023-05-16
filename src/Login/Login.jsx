import React from 'react'
import firebase from '../fb'
import { GoogleAuthProvider , getAuth, signOut} from 'firebase/auth';
import styled from 'styled-components';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Login =  (props) => {

    const navigate = useNavigate();
    const obtenerDatosDeColeccion = async () => {
        const results = await firebase.firestore()
        console.log(results)

    }
    const iniciar = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const user = await firebase.auth().signInWithPopup(provider);
            console.log("Iniciaste sesion con el usuario: " ,user)
        } catch (error) {
            console.log(error)
        }

    }
    const desloguearse = async() => {
        const auth = getAuth();
        signOut(auth)
          .then(() => {
            // El cierre de sesión fue exitoso
            console.log('Cerraste sesión correctamente');
          })
          .catch((error) => {
            // Ocurrió un error durante el cierre de sesión
            console.log('Error al cerrar sesión:', error);
          });
    }
    const sinLogin = () => {
        navigate('/home');
    }

  return (
    <Container>
        <h1>Iniciar sesión</h1>
        <form action="">
            <input type="mail" placeholder="email"/>
            <input type="password" placeholder='password'/>
            <button>ENVIAR</button>
        </form>
        <hr />
        <button onClick={iniciar}>
            LOGUEARME CON <FaGoogle />
        </button>

        <button onClick={desloguearse}>  DESLOGUEARME </button>

    </Container>

  )
}

export default Login

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: auto;
    top: 2vh;
    button{
        border: none;
        margin: 5px;
        padding: 5px;
        border-radius: 5px;
        width: 100px;
        cursor: pointer;
        font-family: 'Ubuntu',sans-serif;
        background: #15924b;
        height: 40px;
        width: 100%;
        font-size: 16px;
    }
    form{
        display: flex;
        flex-direction: column;
        
    }
    `;