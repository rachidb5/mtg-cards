// hooks/useLogin.ts
import { useState } from 'react';
import useFetch from './use-fetch';

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  user: {
    id: string;
    email: string;
    name: string;
  };
  token: string;
}

export function useLogin() {
  const [loginData, setLoginData] = useState<LoginRequest | null>(null);
  
  const { data, error, loading } = useFetch<LoginResponse>(
    loginData ? '/api/auth/login' : '',
    loginData ? {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    } : undefined
  );

  const login = (credentials: LoginRequest) => {
    setLoginData(credentials);
  };

  // Reset do hook
  const reset = () => {
    setLoginData(null);
  };

  return {
    login,
    data,
    error,
    loading,
    reset,
    isSuccess: !!data && !error && !loading,
  };
}