import api from "./api";
import { user } from './appData';

export const authenticate = async (username) => {
  // try {
  //   const response = await api.post("authentication/login", {
  //     username: username || null,
  //     emailAddress: "",
  //     password: password,
  //   });

  //   const { token, expiry } = response.data;

  //   const expiryTime = new Date(expiry).getTime();

  //   localStorage.setItem("authToken", token);
  //   localStorage.setItem("tokenExpiry", expiryTime);

  //   console.log("User authenticated:", response.data.user.firstnames);
  //   return response.data;
  // } catch (error) {
  //   console.error("Error authenticating user:", error);
  //   throw error;
  // }
  return user;
};
