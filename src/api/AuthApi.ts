import axios from "axios";
import {SignInRequest} from "../models/api/auth/SignInRequest";
import {SignInResponse} from "../models/api/auth/SignInResponse";
import {BaseUrl} from "../constants/constants";


export class AuthApi {
    static signIn = async (request: SignInRequest) =>
        await axios.post<SignInResponse>(`${BaseUrl}/api/auth/authenticate`, request);
}