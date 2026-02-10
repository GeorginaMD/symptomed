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

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const loginDemo = () => {
        setUser(DEMO_USER);
        setIsAuthenticated(true);
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
    };

    const value = {
        user,
        isAuthenticated,
        loginDemo,
        logout,
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}