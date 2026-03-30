const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

export const API_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}/auth/login`,
  REGISTER: `${API_BASE_URL}/auth/register`,
  OAUTH2_GOOGLE: `${API_BASE_URL}/oauth2/authorization/google`,

  ADD: `${API_BASE_URL}/quantities/add`,
  SUBTRACT: `${API_BASE_URL}/quantities/subtract`,
  DIVIDE: `${API_BASE_URL}/quantities/divide`,
  COMPARE: `${API_BASE_URL}/quantities/compare`,
  CONVERT: `${API_BASE_URL}/quantities/convert`,
  HISTORY: `${API_BASE_URL}/quantities/history`,
};