import axios from 'axios';

const KEY = 'AIzaSyAIDwJJgOBPFY5E89WlhVgDh8Dv7VZKqP8';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
