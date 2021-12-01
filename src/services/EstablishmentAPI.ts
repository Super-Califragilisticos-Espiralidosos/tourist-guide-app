import axios from 'axios';

const EstablishmentAPI = axios.create({
    baseURL: 'https://tourist-guide-api.herokuapp.com/places',
    responseType: 'json'
});

export default EstablishmentAPI;