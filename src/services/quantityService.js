import { API_ENDPOINTS } from "../config/api";

function getHeaders() {
  const token = localStorage.getItem("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

async function callApi(url, body) {
  const response = await fetch(url, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(body),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went very wrong. The backend said nope.");
  }

  return data;
}

export const quantityService = {
  add: (body) => callApi(API_ENDPOINTS.ADD, body),
  subtract: (body) => callApi(API_ENDPOINTS.SUBTRACT, body),
  divide: (body) => callApi(API_ENDPOINTS.DIVIDE, body),
  compare: (body) => callApi(API_ENDPOINTS.COMPARE, body),
  convert: (body) => callApi(API_ENDPOINTS.CONVERT, body),
  getHistory: () => fetch(API_ENDPOINTS.HISTORY, {
    method: "GET",
    headers: getHeaders(),
  }).then(res => {
    if (!res.ok) throw new Error("Failed to fetch history");
    return res.json();
  }),
};