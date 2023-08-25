import axios from "axios";
import {SignInRequest} from "./auth/SignInRequest";
import {SignInResponse} from "./auth/SignInResponse";
import {BaseUrl} from "../constants/constants";


export class AuthApi {
    static signIn = async (request: SignInRequest) =>
        await axios.post<SignInResponse>(`${BaseUrl}/api/auth/authenticate`, request);
}