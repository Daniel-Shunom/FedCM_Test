# FedCM_Test: Implementing Google's Federated Credentials Management API with Expo

This Expo project demonstrates an implementation of Google's Federated Credentials Management (FedCM) API for streamlined and secure user authentication.

## Overview

This project explores the use of FedCM to simplify the sign-in process while enhancing user privacy. It provides a basic login screen with Google Sign-In integration via FedCM.

## Key Components

-   **`app/index.tsx`**: The main application entry point, featuring a login form and a Google Sign-In button.
-   **`components/LoginForm.tsx`**: A component for handling traditional email/password login (currently a placeholder).
-   **`components/ui/googleSiginButton.tsx`**: A component that renders the Google Sign-In button and initializes the FedCM flow.
-   **`protected/tokenhandler.ts`**: Handles the credential response from Google and exchanges it for user information.
-   **`.env`**: Stores the Google Client ID and endpoint for token verification.

## Get Started

1.  Install dependencies:

    ```bash
    npm install
    ```

2.  Configure your Google Client ID:

    *   Obtain a Google Client ID from the Google Cloud Console.
    *   Update the `.env` file with your Client ID.

    ```
    EXPO_PUBLIC_CLIENT_ID=YOUR_CLIENT_ID
    EXPO_PUBLIC_GOOGLE_END_POINT=https://oauth2.googleapis.com/tokeninfo?id_token=
    ```

3.  Start the app:

    ```bash
    npx expo start
    ```

## FedCM Flow

1.  The `GoogleSignInButton` component loads the Google Sign-In client library.
2.  `tokenhandler.ts` initializes the FedCM flow with your Client ID and a callback function (`handleCredentialResponse`).
3.  The user clicks the Google Sign-In button.
4.  Google's FedCM API handles the authentication process.
5.  Upon successful authentication, the `handleCredentialResponse` function receives the encoded JWT ID token.
6.  The token is sent to Google's tokeninfo endpoint for verification.
7.  User data is retrieved and used to authenticate the user in the application.

## Learn More

-   [Google Federated Credentials Management API](https://developers.google.com/identity/fedcm)
-   [Expo documentation](https://docs.expo.dev/)
-   [Expo Router documentation](https://docs.expo.dev/router/)

## Notes

-   This is a demonstration project and may require further development for production use.
-   The email/password login functionality is not fully implemented.
-   The `updateAuthState` function in `tokenhandler.ts` needs to be implemented to properly manage the user's authentication state.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
