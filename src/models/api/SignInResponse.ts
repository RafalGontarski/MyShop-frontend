export type SignInResponse = {
    id: number;
    firstName: string;
    lastName: string;
    email:string;
    roles: string[];
    token: string;
}