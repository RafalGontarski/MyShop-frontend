export type SignInResponse = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    roles: string[];
    token: string;
}