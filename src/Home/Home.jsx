import React from 'react'
import styled from 'styled-components';
import portada from '../images/portada.jpg'
const Home = () => {
  return (
    <Container>
      <img src={portada} alt="portada" />
    </Container>
      )
}

export default Home

export const Container = styled.main`
  width: 100vw; 
  height: 100vh; 
  img {
    width: 100%; 
    height: 100%; 
    object-fit: cover; 
    }`;
