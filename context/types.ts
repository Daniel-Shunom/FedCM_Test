import { createContext, ReactNode } from "react";

export interface User {
    email: string | null;
    name: string | null;
    fiboToken: string | null;
    clientToken?: string | null;
}

export interface AuthContextType {
    signIn: (()=> Promise<void>) | (()=> User);
    signUp?: ()=> User;
    signOut?: (()=> void);

    user: User | null;
    isLoading: boolean;
}

export interface AuthProps {
    children: ReactNode
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)