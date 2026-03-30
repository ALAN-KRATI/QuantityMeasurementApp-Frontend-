// API Gateway for most requests
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";
// Direct auth-service for OAuth2 (avoids gateway encoding issues)
const AUTH_BASE_URL = import.meta.env.VITE_AUTH_URL || API_BASE_URL;

export const API_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}/auth/login`,
  REGISTER: `${API_BASE_URL}/auth/register`,
  // OAuth2 uses direct auth-service URL to avoid gateway encoding issues
  OAUTH2_GOOGLE: `${AUTH_BASE_URL}/oauth2/authorization/google`,

  ADD: `${API_BASE_URL}/quantities/add`,
  SUBTRACT: `${API_BASE_URL}/quantities/subtract`,
  DIVIDE: `${API_BASE_URL}/quantities/divide`,
  COMPARE: `${API_BASE_URL}/quantities/compare`,
  CONVERT: `${API_BASE_URL}/quantities/convert`,
  HISTORY: `${API_BASE_URL}/quantities/history`,
};