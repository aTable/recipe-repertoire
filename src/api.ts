import { Promise } from "bluebird";
import axios, { AxiosResponse } from "axios";
import config from "./config";

const server = axios.create({
  baseURL: config.serverUri
});

server.interceptors.request.use(onAxiosBegin, undefined);
server.interceptors.response.use(onSuccess, onAxiosError);

function onAxiosBegin(config: any) {
  return config;
}

function onAxiosError(err: any) {
  if (!err.response) {
    return Promise.reject(err);
  } else {
    return Promise.reject(err);
  }
}

function onSuccess(res: AxiosResponse<any>): any {
  localStorage.setItem(res.config.url!, JSON.stringify(res.data));
  return res.data;
}
  