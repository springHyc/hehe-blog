import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://dymapi.shurongdai.cn/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});
