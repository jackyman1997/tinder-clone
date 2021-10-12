import axios from 'axios'; 

const instance = axios.create({
    baseURL: "https://lomore.herokuapp.com/"
});

export default instance;