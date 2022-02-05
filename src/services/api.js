import axios from 'axios';

export const key = 'bc2eb8a7a6d908ccd3d401a728e5d00aa9d78594';

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers: {
    Authorization: `Bearer ${key}`,
  },
});

export default api;
