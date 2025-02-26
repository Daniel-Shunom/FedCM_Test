import { router } from "expo-router";
import { Interface } from "readline";

export interface CreateSessionRequest {
  credentials: string;
}

export interface CreateSessionResponse {
  token: string;
}

export const initializeGoogleSignIn = () => {
  window.google.accounts.id.initialize({
    client_id: process.env.EXPO_PUBLIC_CLIENT_ID,
    callback: handleCredentialResponse,
    redirect_uri: '/applcation'
  });

  window.google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { theme: "outline" , size: "large" }
  );

  window.google.accounts.id.prompt();
};

async function fiboAuth(requestData: CreateSessionRequest): Promise<CreateSessionResponse|undefined>{
  try {

  } catch (error) {
    console.error("Failed to fetch user data:", error);
  }
  //mode: 'no-cors',
  const response = await fetch('https://app.fibo.today/api/session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestData)
  })

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`)
  }

  const data: CreateSessionResponse = await response.json()
  console.log(data)
  return data
}

export const handleCredentialResponse = async (response: any) => {
  const navigation = router;
  console.log("Encoded JWT ID token: " + response.credential);

  try {
    const res = await fetch(`${process.env.EXPO_PUBLIC_GOOGLE_END_POINT}${response.credential}`);
    const data = await res.json();
    try {
      fiboAuth({ credentials: data });
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }

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