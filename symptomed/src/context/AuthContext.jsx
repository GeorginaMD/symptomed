import { createContext, useContext, useState, useEffect, useMemo } from "react";

const AuthContext = createContext();

const DEMO_USER = {
    name: "Demo User",
    email: "demo-login@example.com",
    password: "********",
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
    password: "********",
    telephone: "+01-234-567-890",
    address: "Demo Street 01",
    city: "Valencia",
    country: "Spain",
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [demoHealth, setDemoHealth] = useState(null);
    const [demoProfile, setDemoProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    //on loading check auth 
    const checkAuth = async () => {
        try {
            const res = await fetch("https://symptomed.onrender.com/api/auth/profile", {
                credentials: "include"
            });

            if (!res.ok) { setUser(null); return; }
            
            const data = await res.json();
            setUser(data.user);
        } catch (error) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { checkAuth(); }, []);

    //register
    const register = async (email, password) => {
    try {
        const res = await fetch("https://symptomed.onrender.com/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ email, password }),
        });

        if (!res.ok) {
            const data = await res.json();
            console.log(data.message);
            return false;
        }
        await checkAuth(); // auto-login after register
        return true;
    } catch (error) {
        console.error("Register failed:", error);
        return false;
    }
};


    //login
    const login = async (email, password) => {
        try {
            const res = await fetch("https://symptomed.onrender.com/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ email, password }),
            });

            if (!res.ok) return false;

            await checkAuth(); // refresh user state
            return true;
        } catch (error) {
            console.error("Login failed:", error);
            return false;
        } 
    };

    //demo-login
    const loginDemo = () => {
        setUser(DEMO_USER);
        setDemoHealth(DEMO_HEALTH);
        setDemoProfile(DEMO_PROFILE);
    };
    const updateDemoHealth = (newHealth) => {
        setDemoHealth(newHealth);
    };
    const updateDemoProfile = (newProfile) => {
        setDemoProfile(newProfile);
    };


    //logout
    const logout = async () => {
        try {
            await fetch("https://symptomed.onrender.com/api/auth/logout", {
            method: "POST",
            credentials: "include",
            });
        } catch (error) {
            console.error("Logout request failed:", error);
        }
        setUser(null);
        setDemoHealth(null);
        setDemoProfile(null);
    };

    const value = useMemo(() => ({
        user,
        setUser,
        isAuthenticated: !!user,
        loading,
        demoHealth,
        demoProfile,
        login,
        register,
        loginDemo,
        logout,
        updateDemoHealth,
        updateDemoProfile,
    }), [user,loading,demoHealth,demoProfile]);

    return (
        <AuthContext.Provider value={value}> 
            { children }
        </AuthContext.Provider>
    );
};

//custom hook
export const useAuth = () => {
    return useContext(AuthContext);
};