import axios from 'axios';

export const FETCH_MEDIAS = 'fetch_medias';

const ROOT_URL = 'https://fierce-sands-72483.herokuapp.com';

export function fetchMedias() {
    const request = axios.get(`${ROOT_URL}/files`);

    return {
        type: FETCH_MEDIAS,
        payload: request
    };
}
