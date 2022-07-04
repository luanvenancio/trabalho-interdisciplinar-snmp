import api from "../config/api";

export default class ApiService {
  static get(url, params = {}){
    return new Promise((resolve) => {
      resolve(api.get(url, { params }));
    });
  }
}
