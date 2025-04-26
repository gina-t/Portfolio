// authSevice.ts handles API calls to server authentication endpoints
import axios from 'axios';
import {
  type RegisterResponse,
  LoginResponse,
  UserResponse,
} from '../interfaces/Auth.ts';
import authService from '../utils/auth.ts';

// Base URL for API
const API_URL = '/api/auth';

// Register user
export const registerUser = async (userData: {
  username: string;
  email: string;
  password: string;
}): Promise<RegisterResponse> => {
  const response = await axios.post(`${API_URL}/`, userData);
  if (response.data.token) {
    // Use your existing auth service for token management
    authService.login(response.data.token);
  }
  return response.data as RegisterResponse;
};

// Login user
export const loginUser = async (userData: {
  email: string;
  password: string;
}): Promise<LoginResponse> => {
  const response = await axios.post(`${API_URL}/login`, userData);
  if (response.data.token) {
    // Use your existing auth service for token management
    authService.login(response.data.token);
  }
  return response.data as LoginResponse;
};

// Logout user
export const logoutUser = async (): Promise<{ message: string }> => {
  const response = await axios.post(`${API_URL}/logout`);
  // Use your existing auth service for logout
  authService.logout();
  return response.data;
};

// Get current user
export const getCurrentUser = async (): Promise<UserResponse> => {
  // Set auth header for this request
  const token = authService.getToken();
  const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};

  const response = await axios.get(`${API_URL}/me`, config);
  return response.data;
};
