import type React from "react";

export interface User{
    _id: string;
    name: string;
    email: string;
    image: string;
    role: string;
}

export interface LocationData{
    latitude: number;
    longitude: number;
    formatted_address: string;
}

export interface AppContextType{
    user: User | null;
    loading: boolean;
    isAuth: boolean;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}