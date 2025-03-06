import { createContext, ReactNode } from "react";

export interface User {
    email: string;
    name: string;
    fiboToken: string;
    clientToken?: string;
}

export interface AuthContextType {
    signIn: (response: any)=> Promise<void>;
    signUp?: ()=> User;
    signOut?: ()=> void;

    user: User | null;
    isLoading: boolean;
}

export interface AuthProps {
    children: ReactNode
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)