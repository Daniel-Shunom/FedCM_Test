import { ReactNode, useContext, useState, useEffect } from 'react';
import { AuthContextType, AuthContext, User } from '@/context/types';
import { fiboAuth, initializeGoogleSignIn, updateAuthState } from '@/protected/auth/auth';
import { getCourses } from '@/protected/courses/courses';
import { router } from 'expo-router';
import { handleCredentialResponse } from '@/protected/tokenhandlers/handler';

export function useSession(): AuthContextType {
    const value = useContext(AuthContext);
    if (!value) {
        throw new Error("useSession must be wrapped in a <SessionProvider />")
    }
    return value
}

export function SessionProvider(props: { children: ReactNode}) {
    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const signIn = async () => {
        console.log('login has been triggered')
        const newUser: User = await initializeGoogleSignIn();
        console.log('login successful')
        setUser(newUser)
        setIsLoading(false)
    }

    const logout = () => {
        setUser(null)
        console.log('logout success')
        router.replace('/')
    }

    return (
        <AuthContext.Provider
            value={{
                signIn: signIn,
                signOut: logout,
                user: user,
                isLoading: isLoading
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}