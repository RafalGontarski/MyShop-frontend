import React, {createContext, useContext, useEffect, useState} from "react";
import {link} from "../models/Link";
import {UnLoginPages} from "../models/pages/UnLoginPages";
import {NavbarContextType} from "../models/pages/NavbarContextType";
import {UserContext} from "./UserContexts";
import {AdminPages} from "../models/pages/AdminPages";
import {UserPages} from "../models/pages/UserPages";


const defaultSettings: NavbarContextType = {
    currentPages: UnLoginPages,
    pagesModifier: (pages: link[]) => {},
};

export const NavbarContext = createContext<NavbarContextType>(defaultSettings);

export const NavbarContextProvider = ({ children }: React.PropsWithChildren) => {
    const [currentPages, setCurrentPages] = useState<link[] >([]);
    const {currentUser} = useContext(UserContext);

    const pagesModifier = (pages: link[] ) => {
        setCurrentPages(pages);
    };

    useEffect(() => {
        if (currentUser?.roles.includes("ADMIN")){
            pagesModifier(AdminPages)
        } else if(currentUser?.roles.includes("USER")){
            pagesModifier(UserPages)
        }
        else {
            pagesModifier(UnLoginPages);
        }

    }, [currentUser?.roles]);

    return (
        <NavbarContext.Provider value={{ currentPages, pagesModifier }}>
            {children}
        </NavbarContext.Provider>
    );
};