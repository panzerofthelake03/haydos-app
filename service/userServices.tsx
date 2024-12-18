//TODO: implement user services and API connection later.
import axios from "axios";
import { API_URL,TOKEN,update_TOKEN } from "./serviceConstants";

interface User {
    name?: string;
    email: string;
    password: string;
    phoneNumber?: string;
}

interface LoginCredentials {
    email: string;
    password: string;
}
export interface SigninCredentials {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
}
export interface Signup_LoginResponse{
  status: number;
  token: string;
  image: string;
  phoneNumber: string;
  points: number;
}
const tempusers: User[] = [
  {
    email: "test@test.com",
    password: "123456"
  }
]

//TODO: when the service part finished is the backend for this rewrite here...
export const loginRequest = async (userCredentials: LoginCredentials): Promise<Signup_LoginResponse>=> {
  try {
      console.log("email : " + userCredentials.email)
      console.log("password : " + userCredentials.password)
      const response = await axios.post(API_URL + "/api/v1/auth/login", 
      {
        username: userCredentials.email,
        password: userCredentials.password,
      });
      const loginResponse: Signup_LoginResponse ={
        status: response.status,
        token: response.data.token,
        image: response.data.image,
        phoneNumber: response.data.phoneNumber,
        points: response.data.points
      }
      update_TOKEN(response.data.token);
      return loginResponse;
  }
  catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // If the server responded with an error (status code 4xx, 5xx)
        console.log("Error:", error.response.data);
        return error.response.data;
      }
      else {
        // If the error is a network error (no response)
        console.error("Error:", error.message);
        throw new Error("Network error: Could not reach server");
      }
    } else {
      // If the error is of a different type (not an AxiosError)
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred");
    }
  }
}

//TODO: when the service part finished is the backend for this rewrite here...
 export const signupRequest = async (userCredentials: SigninCredentials): Promise<Signup_LoginResponse> => {
   try {
     // Send a POST request to the backend with user data
     const response = await axios.post(API_URL + "/api/v1/auth/signup", {
       name: userCredentials.name,
       username: userCredentials.email,
       password: userCredentials.password,
       phoneNumber: userCredentials.phoneNumber,
     })
     const signResponse: Signup_LoginResponse ={
      status: response.status,
      token: response.data.token,
      image: response.data.image,
      phoneNumber: response.data.phoneNumber,
      points: response.data.points
     }
     update_TOKEN(response.data.token);
     return signResponse;
   } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // If the server responded with an error (status code 4xx, 5xx)
        console.log("Error:", error.response.data);
        return error.response.data;
      }
      else {
        // If the error is a network error (no response)
        console.error("Error:", error.message);
        throw new Error("Network error: Could not reach server");
      }
    } else {
      // If the error is of a different type (not an AxiosError)
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred");
    }
  }
 }