import { API_ENDPOINTS } from "../config/api";

export async function loginUser(loginData) {
    const response = await fetch(API_ENDPOINTS.LOGIN, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Login failed");
    }

    if (data.token) {
        localStorage.setItem("token", data.token);
    }

    return data;
}

export async function registerUser(registerData) {
    const response = await fetch(API_ENDPOINTS.REGISTER, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Registration failed");
    }

    return data;
}