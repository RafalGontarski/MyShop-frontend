import axios from "axios";
import {SignInRequest} from "../models/api/SignInRequest";
import {SignInResponse} from "../models/api/SignInResponse";
import {BaseUrl} from "../constants/constants";


export class AuthApi {
    static signIn = async (request: SignInRequest) =>
        await axios.post<SignInResponse>(`${BaseUrl}/api/auth/authenticate`, request);
}