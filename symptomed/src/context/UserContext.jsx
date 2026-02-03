import { createContext, useState } from 'react'; 

export const UserContext = createContext(null);

const demoUser = {
      name: "Demo User",
      email: "demo-login@example.com",
      password: "000demoPass",
};

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const loginDemo = () => {
        setUser(demoUser);
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