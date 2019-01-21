import axios from 'axios'
export function getUsers() {

    const url = 'http://demo7507024.mockable.io/react-sample';
    return axios.get(url);
}
