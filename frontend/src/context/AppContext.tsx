import axios from "axios";
import { createContext, useEffect, useState, type ReactNode } from "react";
import { authService } from "../App";
import type { AppContextType, User } from "../types";

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps{
    children: ReactNode;
}
export const AppProvider = ({children}: AppProviderProps)=>{
    const[user, setUser]=useState<User | null>(null);
    const[isAuth, setIsAuth] = useState(false);
    const[loading, setLoading] = useState(true);

    const[location, setLocation] = useState(false);
    const[loadingLocation, setLoadingLocation] =useState(false);

    const[city, setCity] = useState("Fetching Location....");

    async function fetchUser(){
        try {
            const token = localStorage.getItem("token");

            const {data} = await axios.get(`${authService}/api/auth/me`, {
                headers:{
                    Authorization: `Bearer ${token}`,
                },
            });

            setUser(data.user);
            setIsAuth(true);
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchUser();
    }, []);

    return <AppContext.Provider value = {{isAuth, loading, setIsAuth, setLoading, setUser, user}}>{children}</AppContext.Provider>
};

