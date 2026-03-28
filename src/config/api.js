export const BASE_URL = "http://localhost:8081";

export const API_ENDPOINTS = {
  LOGIN: `${BASE_URL}/auth/login`,
  REGISTER: `${BASE_URL}/auth/register`,

  ADD: `${BASE_URL}/quantities/add`,
  SUBTRACT: `${BASE_URL}/quantities/subtract`,
  DIVIDE: `${BASE_URL}/quantities/divide`,
  COMPARE: `${BASE_URL}/quantities/compare`,
  CONVERT: `${BASE_URL}/quantities/convert`,
};