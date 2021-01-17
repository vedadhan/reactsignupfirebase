import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://signup-77be1-default-rtdb.firebaseio.com/'
});

export default instance;