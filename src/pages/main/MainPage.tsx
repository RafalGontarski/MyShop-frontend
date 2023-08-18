// MainPage.tsx

import React from 'react';
import {MainPageContainer} from "./mainPage.styles";

type MainPageProps = {
    userName: string | null;
};

const MainPage: React.FC<MainPageProps> = ({userName}) => {
    return (
        <MainPageContainer>

            {userName && <h1>Witaj, {userName}!</h1>}

            {/* ... reszta zawartości strony ... */}
        </MainPageContainer>
    );
}

export default MainPage;
