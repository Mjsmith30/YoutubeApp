import axios from 'axios';

const KEY = "AIzaSyB8zXCfDN8FInPpRT_vabKXUotKSwnJHZA"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY,
    }


});