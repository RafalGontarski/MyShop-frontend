import React, {createContext, useContext, useState, FC, ReactNode, useEffect} from 'react';

export interface LinkClicksState {
    // DefaultNav
    service: number;
    contact: number;
    about: number;
    hotDeals: number;
    newest: number;
    topSeller: number;
    occasions: number;
    // CategoryNav
    pike:number;
    zander: number;
    perch: number;
    catfish: number;
    asp: number;
    chub: number;
    goFish: number;
    trout: number;
    seaTrout: number;
    carp: number;
    grassCarp: number;
    sturgeon: number;
    underwater: number;
}

export const englishToPolishMap: { [key in keyof LinkClicksState]?: string } = {
    service: "service",
    contact: "contact",
    about: "about",
    hotDeals: "hotDeals",
    newest: "newest",
    topSeller: "topSeller",
    occasions: "occasions",
    pike: "Szczupak",
    zander: "Sandacz",
    perch: "Okoń",
    catfish: "Sum",
    asp: "Boleń",
    chub: "Kleń",
    goFish: "Jaź",
    trout: "Pstrąg",
    seaTrout: "Troć",
    carp: "Karp",
    grassCarp: "Amur",
    sturgeon: "Jesiotr",
    underwater: "Podlodowe"
};

interface ClickContextProps {
    linkClicks: LinkClicksState;
    incrementLinkClickCount: (linkName: keyof LinkClicksState) => void;
}

// Tworzymy kontekst z domyślną wartością (będzie zastąpiona przez provider)
const ClickContext = createContext<ClickContextProps | undefined>(undefined);

// Tworzenie odwrotnego mapowania
export const polishToEnglishMap: { [key: string]: keyof LinkClicksState } = Object
    .entries(englishToPolishMap)
    .reduce((acc, [english, polish]) => {
        if (polish) acc[polish] = english as keyof LinkClicksState;
        return acc;
    }, {} as { [key: string]: keyof LinkClicksState });


// Tworzymy dostawcę kontekstu
export const ClickProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    // Try to load the initial state from localStorage
    const loadInitialState = () => {
        try {
            const storedState = localStorage.getItem('linkClicks');
            return storedState ? JSON.parse(storedState) : {
                // DefaultNav
                service: 0,
                contact: 0,
                about: 0,
                hotDeals: 0,
                newest: 0,
                topSeller: 0,
                occasions: 0,
                // CategoryNav
                pike: 0,
                zander: 0,
                perch: 0,
                catfish: 0,
                asp: 0,
                chub: 0,
                goFish: 0,
                trout: 0,
                seaTrout: 0,
                carp: 0,
                grassCarp: 0,
                sturgeon: 0,
                underwater: 0,

                // ... other links
            };
        } catch {
            // Return default state if parsing fails
            return {
                // DefaultNav
                service: 0,
                contact: 0,
                about: 0,
                hotDeals: 0,
                newest: 0,
                topSeller: 0,
                occasions: 0,
                // CategoryNav
                pike: 0,
                zander: 0,
                perch: 0,
                catfish: 0,
                asp: 0,
                chub: 0,
                goFish: 0,
                trout: 0,
                seaTrout: 0,
                carp: 0,
                grassCarp: 0,
                sturgeon: 0,
                underwater: 0,
                // ... other links
            };
        }
    }

    const [linkClicks, setLinkClicks] = useState<LinkClicksState>(loadInitialState);

    const incrementLinkClickCount = (linkName: keyof LinkClicksState) => {
        setLinkClicks(prev => {
            const newClicks = {
                ...prev,
                [linkName]: (prev[linkName] || 0) + 1,
            };
            try {
                // Save to localStorage when state changes
                localStorage.setItem('linkClicks', JSON.stringify(newClicks));
            } catch (err) {
                console.error('Could not save click state', err);
            }
            return newClicks;
        });
    };

    // Use useEffect to handle side effects
    useEffect(() => {
        try {
            // Save to localStorage when state changes
            localStorage.setItem('linkClicks', JSON.stringify(linkClicks));
        } catch (err) {
            console.error('Could not save click state', err);
        }
    }, [linkClicks]);

    return (
        <ClickContext.Provider value={{ linkClicks, incrementLinkClickCount }}>
            {children}
        </ClickContext.Provider>
    );
};

// Tworzymy hook
export const useClickContext = () => {
    const context = useContext(ClickContext);
    if (!context) {
        throw new Error("useClickContext must be used within a ClickProvider");
    }
    return context;
};
