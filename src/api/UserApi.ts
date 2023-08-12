import axios from "axios";
import {UserRegistrationData} from "../models/api/UserRegistrationData";
import {BaseUrl} from '../constants/constants';
export class UserApi {
    static registerUser = async (request: UserRegistrationData) =>
        await axios.post(`${BaseUrl}/api/auth/register`, request);

}