import axios from 'axios';

const getHeros = async (orderBy) => {
    const { data: resp } = await axios.get('https://gateway.marvel.com:443/v1/public/characters', {
        params: {
            apikey: '736ebd1446ac8d0da2936575392a8fa3',
            limit: 15,
            orderBy
        }
    });
    console.log(resp.data.results);
    return resp.data.results;
}

export default getHeros;