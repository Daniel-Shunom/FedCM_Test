interface CredentialResponse {
  credential: string;
}

interface GoogleInitializeConfig {
  client_id?: string;
  callback: (response: CredentialResponse) => void;
  auto_select?: boolean;
  redirect_uri?: string;
  response_type?: string;
  include_granted_scopes?: boolean;
  login_uri?: string;
  native_callback?: Function;
  cancel_on_tap_outside?: boolean;
  prompt_parent_id?: string;
  nonce?: string;
  context?: string;
  state_cookie_domain?: string;
  ux_mode?: 'popup' | 'redirect';
  allowed_parent_origin?: string | string[];
  intermediate_iframe_close_callback?: Function;
}

interface Google {
  accounts: {
    id: {
      initialize: (config: GoogleInitializeConfig) => void;
      renderButton: (
        element: HTMLElement | null,
        options: {
          theme: 'outline' | 'filled_blue' | 'filled_black';
          size?: 'large' | 'medium' | 'small';
        }
      ) => void;
      prompt: () => void;
    };
  };
}

declare global {
  interface Window {
    google: Google;
  }
}

export {};