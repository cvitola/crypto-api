import styled from 'styled-components';
import Cripto from './Cripto/Cripto';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import Home from './Home/Home';
import Router from './Router/Router';
import React, { useState , useEffect } from 'react';
import { obtenerMaestrosCriptos } from './api/Axios';
import Header from './Header/Header';

//ojo falta el IMPORT de fb.js .....

function App() {

  const [allcriptos, setAllCriptos] = useState([]);
  const [usuario,setUsuario] = useState(null);


  const onGetAllCriptos = async() => {
    try {
      const response = await obtenerMaestrosCriptos();
      setAllCriptos(response);
    } catch (error) {
      alert(error)
    }
    
  }
  useEffect( () => {
    onGetAllCriptos();
  },[])

  return (
    <Container>
      <Header />
      <Router />
      {/*
        usuario ? <Home /> : <Login setUsuario={setUsuario} />*/
      }
      <Footer />
    </Container>
    /*
    <Container>
      
      <header>
        <h1>Crypto currency quote in real time</h1>
        <input type="text" placeholder='Coming soon...' disabled/>
      </header>

      <Criptos>
        <ul>
          {
            allcriptos?.map( data => (
              <Cripto info={data} key={data.id} />
            ))
          }
        </ul>
      </Criptos>
      <Footer>
      
      </Footer>
    </Container>
*/
  );
}

export default App;


const Container = styled.main`
  display: flex;
  background-color: #a59bb4;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  text-align: center;

  input {
    height: 40px;
    border: none;
    width: 100%;
    border-radius: 5px;
    box-shadow: 1px 1px 1px grey;
    padding: 5px;
    margin: 5px;
    font-family: 'Ubuntu', sans-serif;
  }

  h1{
    padding: 5px;
    margin: 5px;
  }`;

