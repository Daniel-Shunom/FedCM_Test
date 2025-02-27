import { handleCredentialResponse } from "../tokenhandlers/handler";
import { CreateSessionRequest, CreateSessionResponse } from "../types/types";

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

//starts fibo auth session and gets auth token
export async function fiboAuth(requestData: CreateSessionRequest): Promise<CreateSessionResponse|undefined>{
  try {

  } catch (error) {
    console.error("Failed to fetch user data:", error);
  }
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
  localStorage.setItem('fibo_session_token', data.token)
  console.log(data)
  return data
}

export const updateAuthState = (userData: any) => {
  console.warn("Implement updateAuthState to properly update the AuthContext");
};