import Axios from 'axios';

const baseURL = Axios.create({
    baseURL: import.meta.env.VITE_BASE_URL_EXTERN
});

export default baseURL;
