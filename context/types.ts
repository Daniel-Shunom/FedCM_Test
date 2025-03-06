import { createContext, ReactNode } from "react";

export interface User {
    email: string;
    name: string;
    fiboToken: string | null;
    clientToken?: string | null;
}

export interface AuthContextType {
    signIn: ((response: any)=> Promise<void>) | (()=> void);
    signUp?: ()=> User;
    signOut?: (()=> void);

    user: User | null;
    isLoading: boolean;
}

export interface AuthProps {
    children: ReactNode
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)