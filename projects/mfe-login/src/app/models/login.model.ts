export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginUser {
  email: string;
  role: string;
}

export interface LoginResponse {
  message: {
    success: boolean;
    message: string;
    user: LoginUser;
  };
}