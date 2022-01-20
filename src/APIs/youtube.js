import axios from 'axios';

// const KEY = 'AIzaSyDGlKw9fMtTLlxc2DrhZI8PmQ6rlflcj6g';
const KEY = 'AIzaSyAcUbEWnYq_MgcnfpiL2uHwqyafuLpI0MY';
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});

