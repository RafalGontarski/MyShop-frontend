import axios from "axios";
import {UserRegistrationData} from "../models/api/UserRegistrationData";
import {BaseUrl} from '../constants/constants';
import {UserResponse} from "../models/api/UserResponse";
import {authorizedApi} from "../hooks/withAxiosIntercepted";
export class UserApi {
    static registerUser = async (request: UserRegistrationData) =>
        await axios.post(`${BaseUrl}/api/auth/register`, request);


    static getUser = async () =>
        await authorizedApi.get<UserResponse>(`${BaseUrl}/api/users/getUser`);
}