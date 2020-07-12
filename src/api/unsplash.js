import axios from 'axios';

const { REACT_APP_UNSPLASH_ACCESS_KEY } = process.env;

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 
            `Client-ID ${REACT_APP_UNSPLASH_ACCESS_KEY}`
    }
});