import api from "../utils/api";
import endPoints from "../Constants/enpoints";
import { Ilogin } from "../types/auth";
import { AxiosRequestConfig } from "axios";

const signupUser = (data: any) => {
    return api.post(endPoints.signup, data).then(res=> res);
}

const loginUser = (data: Ilogin) => {
    return api.post(endPoints.login, data).then(res => res);
}
export {signupUser,loginUser}