import { Platform, View } from 'react-native'
import { useEffect } from "react";
import { initializeGoogleSignIn } from "@/protected/auth/auth";

const GoogleSignInButton: React.FC = () => {
    useEffect(() => {
      if (Platform.OS === 'web') { // Only run on web
        const script = document.createElement("script");
        script.src = "https://accounts.google.com/gsi/client";
        script.async = true;
        script.onload = initializeGoogleSignIn;
        document.body.appendChild(script);
      }
    }, []);

  return Platform.OS === 'web' ? <View id="buttonDiv" /> : null;
};

export { GoogleSignInButton }