import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleOnInvitado = () => { navigate('/dashboard')}
  const handleOnLogin = () => { navigate('/login')}
  return (
    <Head>
          <h2>CRYPTOSystem</h2>
          <Start>
            <button onClick={handleOnLogin}>LOGIN</button>
            <button onClick={handleOnInvitado}>INVITADO</button>
          </Start>
    </Head>
  )
}

export default Header

export const Head = styled.header`
  height: 100px;
  background-color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 10px;
  width: 100%;
  background: #2A2A2A;
  color: #FAFAFA;
  font-family: 'Patua One', cursive;
  position: fixed;
  z-index: 10;
  `;

export const Start = styled.div`
  display: flex;
  padding: 5px;
  gap: 20px;

  button {
    border: none;
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
    width: 100px;
    cursor: pointer;
    font-family: 'Ubuntu', sans-serif;
    background: #929215;
    height: 30px;
    font-size: 16px;
  }

  @media only screen and (max-width: 576px){
    flex-direction: column;
    gap: 5px;
  }
  `;
