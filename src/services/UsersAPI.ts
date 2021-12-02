import axios from 'axios';

const baseURL = process.env.REACT_APP_USERS_API;

const UsersAPI = axios.create({
    baseURL: baseURL,
    headers: { 'content-type': 'multipart/form-data' }
});

export default UsersAPI;