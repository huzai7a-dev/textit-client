import axios, { CreateAxiosDefaults, AxiosStatic, AxiosInstance, AxiosRequestConfig, AxiosPromise } from "axios";

const axiosParams:CreateAxiosDefaults<any> = {
    baseURL: 'http://localhost:5000',
}

const axiosInstance:AxiosInstance = axios.create(axiosParams);

interface apiTypes {
    get: (url: string, config?: AxiosRequestConfig<any>) => AxiosPromise<any>,
    post: (url: string, data?: any, config?: AxiosRequestConfig<any>) => AxiosPromise<any>,
    put: (url: string, data?: any, config?: AxiosRequestConfig<any>) => AxiosPromise<any>,
    delete: (url: string, config?: AxiosRequestConfig<any>) => AxiosPromise<any>
}

const api = (axios:AxiosInstance):apiTypes => {
    return {
        get: (url: string, config: AxiosRequestConfig<any> = {}) => axios.get(url, config),
        post: (url: string,data:any, config: AxiosRequestConfig<any> = {}) => axios.post(url,data,config),
        put: (url: string,data:any, config: AxiosRequestConfig<any> = {}) => axios.put(url,data,config),
        delete: (url: string, config: AxiosRequestConfig<any> = {}) => axios.delete(url, config),
    }
}

export default api(axiosInstance)