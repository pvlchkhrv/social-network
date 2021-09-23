import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '44d5e153-6a8e-4009-97fa-dc87b2117b60'
    },
    withCredentials: true
});
