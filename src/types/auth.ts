export interface RegisterRequestBody {
  name: string;
  email: string;
  password: string;
  phone?: string;
  age?: number;
  role: string;
}

export interface RegisterResponse {
  message: string;
  user?: unknown;
  error?: string;
}
