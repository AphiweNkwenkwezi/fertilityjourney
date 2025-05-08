import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Request Interceptor (Attach Token to Headers)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");

    if (isTokenExpired()) {
      logoutUser();
      return Promise.reject(new Error("Token expired"));
    }

    if (token && config.requiresAuth !== false) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    console.log(`[API Request] ${config.method.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor (Handle 401 Unauthorized)
api.interceptors.response.use(
  (response) => {
    console.log(`[API Response] ${response.status} ${response.config.url}`);
    return response;
  },
  (error) => {
    console.error("[API Error]", error.response?.data || error.message);

    if (error.response?.status === 401) {
      console.warn("Token expired or unauthorized. Redirecting to login...");
      logoutUser();
    }

    return Promise.reject(error);
  }
);

const isTokenExpired = () => {
  const expiry = localStorage.getItem("tokenExpiry");
  return expiry && Date.now() >= parseInt(expiry);
};

const logoutUser = () => {
  console.warn("Token expired. Logging out...");
  localStorage.removeItem("authToken");
  localStorage.removeItem("tokenExpiry");
  window.location.href = "/"; // Redirect to .NET login page
};

export default api;
