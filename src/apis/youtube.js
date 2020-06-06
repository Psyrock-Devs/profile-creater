import axios from 'axios';
const KEY = 'AIzaSyCGW4Mo00Qh9BGPIWU1BhxB34PV7z2f6G8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})