import React , {useState } from 'react';
import styled from 'styled-components';
import { getDetailsCrypto } from '../api/Axios';
import { FaArrowAltCircleUp, FaArrowAltCircleDown , FaStickyNote, FaLink} from 'react-icons/fa';

const Cripto = ({info}) => {

  const [show, setShow] = useState(false);
  const [detail, setDetail] = useState({});
  const [ars, setArs] = useState(0);

  const formatddmmyyyyy = (cadena) => {
    let aux = cadena.split('T')[0].split('-');
    return `${aux[2]}-${aux[1]}-${aux[0]}`
  }

  const handleOnDetails = (name) => {
    setShow(!show);
    onGetDetails(name.toLowerCase());
  }

  const onGetDetails = async(name) => {
    try {
      const response = await getDetailsCrypto(name);
      setDetail(response);
    } catch (error) {
      alert(error)
    }
  }

  const arrowUpDown = (value) => {
    return parseFloat(value) > 0 ? <FaArrowAltCircleUp color='green'/> : <FaArrowAltCircleDown color='red'/>;
  }

  const handleOnChangeArs = (e) => {
    setArs(e.target.value)
  }

  return (
    <Container>
      <Title>
        <img src={info.image} alt="mh" />
        <h3>{info.name}</h3>
      </Title>
      <h4>{info.symbol.toUpperCase()}</h4>
      <p>{info.current_price} USD</p>
      <p>{formatddmmyyyyy(info.last_updated)}</p>
      <button onClick={() => handleOnDetails(info.id)}>{show ? "Ocultar": "Detalle"}</button>
      {
        show ? 
        <Detalle>
          <Item>
            <label><FaStickyNote /></label>
            <p>{detail.description?.en.split('.')[0]}</p>
          </Item>
          <Item>
            <label><FaLink /></label>
            <a href={detail.links?.homepage[0]} target="_blank">{detail.links?.homepage[0]}</a>
          </Item>
          <Item>
            <strong>ARS</strong>
            <p>{detail.market_data?.current_price.ars}</p>
          </Item>
          <Item>
            <label>{arrowUpDown(detail.market_data?.price_change_percentage_24h)} </label>
          <p>{ `${detail.market_data?.price_change_percentage_24h} %`} last 24hs</p>
          </Item>
          <Item>
            <p>How many coins can i get with my ARS ?</p>
            <input onChange={handleOnChangeArs}/>
          </Item>
          <Item>
            <label></label>
            <p>{(parseFloat(ars)/parseFloat(detail.market_data?.current_price.ars)).toFixed(10)}</p>
          </Item>
          
        </Detalle>
      :
      ""
      }

    </Container>
  )
}

export default Cripto

const Container = styled.article`
    background: rgba(255, 255, 255, .25);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    border: 1.5px solid rgba(209, 213, 219, 0.3);
    border-radius: 1rem;
    box-shadow: 1px 1px 1px grey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 10px;
    :hover{
      background: rgba(247, 248, 209, 0.247);
      transform: translate(0,-5px)
    }
    img{
      width: 20px;
    }
    
    button {
      border: none;
      padding: 8px;
      margin: 8px;
      border-radius: 5px;
      background: rgb(41 10 76 / 50%);
      box-shadow: 2px 2px 2px grey;
    }

    @media only screen and (min-width: 576px){
      width: 45%;
    }

    @media only screen and (min-width: 1024px){
      width: 30%;
    }
    `;

const Title = styled.div`
  display: flex;
  padding: 10px;
  gap: 5px;
  `;

const Detalle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    text-align: justify;
    padding: 5px;
    margin: 5px;
    gap: 5px;
  `;
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  `;