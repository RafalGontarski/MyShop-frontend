import axios from "axios";
import {UserRegistrationData} from "../models/api/UserRegistrationData";
import {BaseUrl} from '../constants/constants';
import {UserResponse} from "../models/api/UserResponse";
import {authorizedApi} from "../hooks/withAxiosIntercepted";
import {AddressBookUpdateRequest} from "../models/api/AddressBookUpdateRequest";
export class UserApi {
    static registerUser = async (request: UserRegistrationData) =>
        await axios.post(`${BaseUrl}/api/auth/register`, request);
    static getUser = async () =>
        await authorizedApi.get<UserResponse>(`${BaseUrl}/api/users/getUser`);
    static updateUserEmail = async (userId: number, newEmail: string) =>
        await axios.patch(`${BaseUrl}/api/users/${userId}/email`, { email: newEmail });

    static updatePassword = async (userId: number, newPassword: string) =>
        await axios.patch(`${BaseUrl}/api/users/${userId}/password`, {password: newPassword});

    static updateAddressBook = async (
        userId: number,
        newFirstName: string,
        newLastName: string,
        newAddress: string,
        newPostalCode: string,
        newCity: string,
        newCountry: string) =>
        await axios.patch(`${BaseUrl}/api/users/${userId}/address-book`,
            {
                firstName: newFirstName,
                lastName: newLastName,
                address: newAddress,
                postalCode: newPostalCode,
                city: newCity,
                country: newCountry
            });

    static updateFirstName = async (userId: number, newFirstName: string) =>
        await axios.patch(`${BaseUrl}/api/users/${userId}/firstName`, { firstName: newFirstName });
}
