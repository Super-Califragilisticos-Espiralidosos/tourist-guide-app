import axios from 'axios';

const baseURL = process.env.REACT_APP_ESTABLISHMENT_API;

const EstablishmentAPI = axios.create({
    baseURL: baseURL,
    responseType: 'json'
});

export default EstablishmentAPI;