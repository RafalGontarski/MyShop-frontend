import React from 'react';
import Navbar from './components/navbar/Navbar';
import {withAxiosIntercepted} from "./hooks/withAxiosIntercepted";
import {UserContextProvider} from "./context/UserContext";

const App = () => {
    return (
        <div>
            <UserContextProvider>
                <Navbar />
            </UserContextProvider>
        </div>
    );
}

export default withAxiosIntercepted(App);

