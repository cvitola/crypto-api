import React, { useState , useEffect } from 'react';
import Cripto from '../Cripto/Cripto';
import styled from 'styled-components';
import { obtenerMaestrosCriptos } from '../api/Axios';

const Dashboard = () => {

    const [allcriptos, setAllCriptos] = useState([]);

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
        <h2>Panel</h2>
        <ul>
          {
            allcriptos?.map( data => (
              <Cripto info={data} key={data.id} />
            ))
          }
        </ul>
    </Container>
  )
}

export default Dashboard

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 160px;
    width: 100%;

    @media only screen and (min-width: 576px){
    ul{
        display: flex;
        justify-content: center;
        flex-flow: wrap;
    }`;