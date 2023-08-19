export type SignInResponse = {
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    postalCode: string;
    city: string;
    country: string;
    email: string;
    password: string;
    roles: string[];
    token: string;
}