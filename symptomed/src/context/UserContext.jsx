import { createContext, useContext, useState } from 'react'; 

const UserContext = createContext(null);

export function useUser() {
    return useContext(UserContext);
}

const DEMO_USER = {
    name: "Demo User",
    email: "demo-login@example.com",
    password: "000demoPass",
};

const DEMO_HEALTH = {
    gender: "male",
    age: 39,
    weight: 70,
    height: 176,
    sleep: 7,
    physical_activity: "moderate",
    blood_group: "O-",
};

const DEMO_PROFILE = {
    name: "Demo User",
    email: "demo-login@example.com",
    password: "000demoPass",
    telephone: "+01-234-567-890",
    address: "Demo Street 01",
    city: "Valencia",
    country: "Spain",
};

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [demoHealth, setDemoHealth] = useState(null);
    const [demoProfile, setDemoProfile] = useState(null);

    const loginDemo = () => {
        setUser(DEMO_USER);
        setDemoHealth(DEMO_HEALTH);
        setDemoProfile(DEMO_PROFILE);
        setIsAuthenticated(true);
    };

    const logout = () => {
        setUser(null);
        setDemoHealth(null);
        setDemoProfile(null);
        setIsAuthenticated(false);
    };

    const updateDemoHealth = (newHealth) => {
        setDemoHealth(newHealth);
    };

    const updateDemoProfile = (newProfile) => {
        setDemoProfile(newProfile);
    };

    const value = {
        user,
        isAuthenticated,
        demoHealth,
        demoProfile,
        loginDemo,
        logout,
        updateDemoHealth,
        updateDemoProfile,
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}