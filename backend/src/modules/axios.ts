import Axios from 'axios';

const baseURL = Axios.create({
    baseURL: process.env.BASE_URL_EXTERN
});

export default baseURL;
