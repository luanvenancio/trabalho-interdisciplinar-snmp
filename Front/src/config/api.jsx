import axios from 'axios';
import { stringify } from 'qs';
import toast from 'react-hot-toast';

const api = axios.create({
    baseURL: 'http://localhost:5000/api/',
    paramsSerializer: (data) => stringify(data),
    data: {
      cancelToken: axios.CancelToken.source(),
    }
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log(error);
      if (error.response) {
        const { status } = error.response;

        if (status === 500) {
          toast.error("Endereço de IP ou Comunidade não encontrada");
          axios.CancelToken.source().source.cancel();
        }
      }

      return Promise.reject(error);
    },
);
  
export default api;