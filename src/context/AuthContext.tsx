"use client";

import { getCookie} from "@/utils/cookies";
import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

interface User {
    Nome: string;
    Cognome: string;
    Tipologia: string;
    Email: string;
    RS: string;
    Indirizzo: string;
    NumeroCivico: string;
    Città: string;
    CAP: string;
    Paese: string;
    IDIva: string;
    CodiceFiscale: string;
    CodiceSDI: string;
    FlgComCom: string;
    DataInserimento: string;
    FlgEmailConfermata: boolean;
    FlgControllatoPiva: boolean;
    PEC?: string;
}

interface AuthContextType {
    userId: string | null | undefined;
    setUserId: (id: string | null | undefined) => void;
    userData: User | null;
    setUserData: (data: User | null) => void;
}

const AuthContext = createContext<AuthContextType>({
    userId: null,
    setUserId: () => {},
    userData: null,
    setUserData: () => {},
});

async function fetchUserData(userId: string) {
    const res = await fetch(
        `https://php.leone.it/api/ws_leone/GetUser.php?IN_USERID=${userId}`,
        {
            headers: {
                Authorization:
                    "Bearer wlfca9P8Zn0zQt4zwpcDne4KJROqEOAzIy3dr0Eyxhbzhqz4ydddgjc",
            },
        }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.ReturnedObject || null;
}

export function AuthProvider({ children }: { children: ReactNode }) {
    const [userId, setUserId] = useState<string | null | undefined>(undefined);
    const [userData, setUserData] = useState<User | null>(null);

    useEffect(() => {
        const cookieUserId = getCookie("idUser");
        if (cookieUserId) {
            setUserId(cookieUserId);
        } else {
            setUserId(localStorage.getItem("userId"));
        }
    }, []);

    useEffect(() => {
        if (userId) {
            fetchUserData(userId).then(setUserData);
        } else {
            setUserData(null);
        }
    }, [userId]);

    return (
        <AuthContext.Provider value={{ userId, setUserId, userData, setUserData }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);