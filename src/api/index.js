import axios from "axios";

const API = axios.create({
  baseURL: "url"
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("x-token");
  const refreshToken = localStorage.getItem("refreshToken");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
    req.headers["x-refresh-token"] = `Bearer ${refreshToken}`;
  }
  return req;
});
API.interceptors.response.use((res) => {
  console.log("response headers", res.headers);

  const token = localStorage.setItem("x-token", res.headers["x-token"]);
  const refreshToken = localStorage.setItem(
    "refreshToken", 
    res.headers["x-refresh-token"]
  );

  return res;
});

export const signIn = (formData) => API.post("/login", formData);
export const signUp = (formData) => API.post("/signup", formData);
