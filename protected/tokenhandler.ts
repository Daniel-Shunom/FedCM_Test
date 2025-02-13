import { config } from "dotenv";
import { router } from "expo-router";

if (typeof process.cwd === 'function') {
    config();
}

export const initializeGoogleSignIn = () => {
  window.google.accounts.id.initialize({
    client_id: process.env.CLIENT_ID,
    callback: handleCredentialResponse,
    redirect_uri: '/applcation'
  });

  window.google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { theme: "outline" , size: "large" }
  );

  window.google.accounts.id.prompt();
};

export const handleCredentialResponse = async (response: any) => {
  const navigation = router;
  console.log("Encoded JWT ID token: " + response);

  try {
    const res = await fetch(`${process.env.GOOGLE_END_POINT}${response.credential}`);
    const data = await res.json();

    /*
    /Techinically we could do whatever we want with the data object members, since it contains all the 
    /user information. We could store it in a database, or use it to authenticate the user. 
    /But for now, I am just gonna not do anything with it given that it's just a trail project.
    */

    console.log("Data:", data);
    updateAuthState(data);

    navigation.replace('/application');
  } catch (error) {
    console.error("Failed to fetch user data:", error);
  }
};

const updateAuthState = (userData: any) => {
  console.warn("Implement updateAuthState to properly update the AuthContext");
};