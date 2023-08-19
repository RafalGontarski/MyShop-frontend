import axios from "axios";
import {UserRegistrationData} from "../models/api/UserRegistrationData";
import {BaseUrl} from '../constants/constants';
import {UserResponse} from "../models/api/UserResponse";
import {authorizedApi} from "../hooks/withAxiosIntercepted";
import {AddressUpdateRequest} from "../models/api/AddressUpdateRequest";
export class UserApi {
    static registerUser = async (request: UserRegistrationData) =>
        await axios.post(`${BaseUrl}/api/auth/register`, request);
    static getUser = async () =>
        await authorizedApi.get<UserResponse>(`${BaseUrl}/api/users/getUser`);
    static updateUserEmail = async (userId: number, newEmail: string) =>
        await axios.patch(`${BaseUrl}/api/users/${userId}/email`, { email: newEmail });

    static updateAddress = async (userId: number, addressRequest: AddressUpdateRequest) =>
        await authorizedApi.patch(`${BaseUrl}/api/users/${userId}/address`, addressRequest);

    static updateFirstName = async (userId: number, firstName: string) =>
        await authorizedApi.patch(`${BaseUrl}/api/users/${userId}/firstName`, { firstName });
}
