import React from 'react';
import Navbar from './components/navbar/Navbar';
import {withAxiosIntercepted} from "./hooks/withAxiosIntercepted";


const App = () => {
    return (
        <div>

                <Navbar />

        </div>
    );
}

export default withAxiosIntercepted(App);

