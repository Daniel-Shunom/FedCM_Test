/*
Daniel SJ
Feb 12 2024

Description: Google signin generated component from 
Note: Actual email and password section does not load in yet.
*/

import React, { useEffect } from "react";
import { View } from "react-native-web";
import { initializeGoogleSignIn } from "@/protected/auth/auth";

const GoogleSignInButton: React.FC = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://accounts.google.com/gsi/client";
        script.async = true;
        script.onload = initializeGoogleSignIn;
        document.body.appendChild(script);
    });

  return <View id="buttonDiv" />;
};

const GoogleSignUpButton: React.FC = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://accounts.google.com/gsi/client";
        script.async = true;
        script.onload = initializeGoogleSignIn;
        document.body.appendChild(script);
    });

  return <View id="buttonDiv" />;
};

export { GoogleSignUpButton };
export default GoogleSignInButton;
