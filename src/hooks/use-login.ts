// hooks/useLogin.ts
import { useMemo, useState } from 'react';
import useFetch from './use-fetch';

interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
  user: {
    id: string;
    username: string;
    name: string;
  };
  token: string;
}

export function useLogin() {
  const [loginData, setLoginData] = useState<LoginRequest | null>(null);

  const options = useMemo(() => {
    if (!loginData) return undefined;
    return {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginData),
    };
  }, [loginData]);

  const { data, error, loading } = useFetch<LoginResponse>(
    'https://dummyjson.com/auth/login',
    options
  );

  const login = (credentials: LoginRequest) => {
    setLoginData(credentials);
  };

  const reset = () => setLoginData(null);

  return {
    login,
    data,
    error,
    loading,
    reset,
    isSuccess: !!data && !error && !loading,
  };
}