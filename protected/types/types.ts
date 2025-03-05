export interface CreateSessionRequest {
    credential: string;
}

export interface CreateSessionResponse {
  token: string;
}

export interface GoogleAuth {
  os?: 'web' | 'ios'
  scriptSrc: string;
  onPress: ()=> void;
}