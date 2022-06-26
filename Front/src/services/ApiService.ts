import { AxiosResponse } from "axios";
import api from "../config/api";

export default class ApiService {
  public static get(url: string, params: any = {}): Promise<AxiosResponse> {
    return new Promise<AxiosResponse>((resolve) => {
      resolve(api.get(url, { params }));
    });
  }
}
