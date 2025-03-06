import { ReactNode, useContext, useState, useEffect } from 'react';
import { AuthContextType, AuthContext, User } from '@/context/types';
import { fiboAuth, updateAuthState } from '@/protected/auth/auth';
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

    useEffect(()=> {
        const handleCredentialResponse = async (response: any) => {
          const navigation = router;
          console.log('Handle Response');
        
          try {
            const res = await fetch(`${process.env.EXPO_PUBLIC_GOOGLE_END_POINT}${response.credential}`);
            const data = await res.json();
            updateAuthState(data);
        
            await fiboAuth({ credential: response.credential })
            .then(()=> console.log('Retriving UserData'))
            .catch((error) => {console.error("Failed to fetch user data:", error)})
            .then(()=> console.log('Retrived UserData'));
        
            const session_token = localStorage.getItem('fibo_session_token');
            await getCourses(session_token);
        
            navigation.replace('/application');
          } catch (error) {
            console.error("Failed to fetch user data:", error);
          }
        };
    })
    return (
        <AuthContext.Provider
            value={{
                signIn: handleCredentialResponse,
                user: user,
                isLoading: isLoading
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}