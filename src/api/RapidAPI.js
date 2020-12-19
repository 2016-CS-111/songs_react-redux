import axios from 'axios';

const KEY = '3bcc75e92fmshc6849c180e1e8aap1479d9jsn68a6ccb9a131'

export default axios.create({
    baseURL: 'https://genius.p.rapidapi.com',
    headers: {
        'x-rapidapi-key': KEY
        // 'x-rapidapi-host': 'genius.p.rapidapi.com'
    }
});