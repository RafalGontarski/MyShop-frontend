import {useEffect, useState} from "react";
import {BaseUrl} from "../constants/constants";

type ApiResponse = {
    email: string;
    firstName: string;
    roles: string[];
    token: string;
};

const fetchData = async () => {
    try {
        const response = await fetch(`${BaseUrl}/api/auth/authenticate`);
        const data: ApiResponse = await response.json();
        console.log(data);
        console.log(data.firstName); // Tutaj powinieneś zobaczyć wartość "rafal"
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
};

export const MyComponent: React.FC = () => {
    const [firstName, setFirstName] = useState<string>('');

    useEffect(() => {
        const getData = async () => {
            const data = await fetchData();
            console.log(data);
            if (data) {
                setFirstName(data.firstName);
            }
        };

        getData();
    }, []);

    return (
        <div>Hello, {firstName}!</div>
    );
};
