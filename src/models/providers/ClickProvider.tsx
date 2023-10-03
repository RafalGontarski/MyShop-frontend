import React, {createContext, useContext, useState, FC, ReactNode, useEffect} from 'react';

interface LinkClicksState {
    service: number;
    contact: number;
    about: number;
    hotDeals: number;
    newest: number;
    topSeller: number;
    occasions: number;
    // ... pozostałe linki
}

interface ClickContextProps {
    linkClicks: LinkClicksState;
    incrementLinkClickCount: (linkName: keyof LinkClicksState) => void;
}

// Tworzymy kontekst z domyślną wartością (będzie zastąpiona przez provider)
const ClickContext = createContext<ClickContextProps | undefined>(undefined);


// Tworzymy dostawcę kontekstu
export const ClickProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    // Try to load the initial state from localStorage
    const loadInitialState = () => {
        try {
            const storedState = localStorage.getItem('linkClicks');
            return storedState ? JSON.parse(storedState) : {
                service: 0,
                contact: 0,
                about: 0,
                hotDeals: 0,
                newest: 0,
                topSeller: 0,
                occasions: 0,
                // ... other links
            };
        } catch {
            // Return default state if parsing fails
            return {
                service: 0,
                contact: 0,
                about: 0,
                hotDeals: 0,
                newest: 0,
                topSeller: 0,
                occasions: 0,
                // ... other links
            };
        }
    }

    const [linkClicks, setLinkClicks] = useState<LinkClicksState>(loadInitialState);

    const incrementLinkClickCount = (linkName: keyof LinkClicksState) => {
        setLinkClicks(prev => {
            const newClicks = {
                ...prev,
                [linkName]: prev[linkName] + 1,
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
