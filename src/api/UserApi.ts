import axios from "axios";
import { authorizedApi } from "../hooks/withAxiosIntercepted";
import { UserResponse } from "../models/api/UserResponse";
import {UserRegistrationData} from "../models/api/UserRegistrationData";
import {ProfileUserResponse} from "../models/api/ProfileUserResponse";
import {BaseUrl} from '../constants/constants';
export class UserApi {
    static getUser = async () =>
        await authorizedApi.get<UserResponse>("/users/getUser");

    static registerUser = async (request: UserRegistrationData) =>
        await axios.post(`${BaseUrl}/auth/register`, request);

    static getProfileUser = async () =>
        await authorizedApi.get<ProfileUserResponse>("/users/profile");

}