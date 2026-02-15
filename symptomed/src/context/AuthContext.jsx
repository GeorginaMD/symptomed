import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //on loading check auth
    const checkAuth = async () => {
        try {
            const res = await fetch("http://localhost:3000/api/auth/profile", {
                credentials: "include"
            });

            if (!res.ok) { setUser(null); return; }
            
            const data = await res.json();
            setUser(data);

        } catch (error) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { checkAuth(); }, []);


    //login
    const login = async (email, password) => {
        const res = await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ email, password }),
        });

        if (!res.ok) { throw new Error("Login failed!");}

        await checkAuth(); // refresh user state
    };

    //logout
    const logout = async () => {
        await fetch("http://localhost:3000/api/auth/logout", {
            method: "POST",
            credentials: "include",
        });
        setUser(null);
    };

    return (
        <AuthContext.Provider 
            value={{user,
                isAuthenticated: !!user,
                loading,
                login,
                logout,
            }}
        > { children }
        </AuthContext.Provider>
    );
};

//custom hook
export const useAuth = () => {
    return useContext(AuthContext);
};