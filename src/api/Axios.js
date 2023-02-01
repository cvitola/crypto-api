import axios from 'axios';

export const obtenerMaestrosCriptos = async() => {
    try{
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
        if(response.status === 200){
            return response.data;
        }
    }
    catch(err){
        console.log(err)
        return err;
    }
    
}

export const getDetailsCrypto = async(name) => {
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${name}`);
        if(response.status === 200){
            return response.data;
        }
    } catch (err) {
        console.log(err)
        return err;
    }
}

