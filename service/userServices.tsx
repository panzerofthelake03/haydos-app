//TODO: implement user services and API connection later.
import axios from "axios";
const API_URL = "http://10.8.58.79:8088";
const TOKEN = "8f2a3d1c5e47c6b1a4b9f7e9d2c0a6f3d8b1e4f9a2c6d7b3f5a8c1e7b9d4f2a3"

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

const tempusers: User[] = [
  {
    email: "test@test.com",
    password: "123456"
  }
]

//TODO: when the service part finished is the backend for this rewrite here...
export const loginRequest = async (userCredentials: User): Promise<number>=> {
  try {
    const response = await axios.post(API_URL + "/auth/login", {
        id: 1,
        email: userCredentials.email,
        password: userCredentials.password,
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
      );
      return response.status;
  }
  catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // If the server responded with an error (status code 4xx, 5xx)
        console.error("Error:", error.response.data);
        throw new Error(error.response.data.message || "Signup failed");
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
// export const signupRequest = async (userCredentials: User) => {
//   try {
//     // Send a POST request to the backend with user data
//     const response = await axios.post(API_URL, {
//       name: userCredentials.name,
//       email: userCredentials.email,
//       password: userCredentials.password,
//       phoneNumber: userCredentials.phoneNumber,
//     });

//     return response.data; 

//   } catch (error) {
//     if (error.response) {
//       console.error("Error:", error.response.data);
//       throw new Error(error.response.data.message || "Signup failed");
//     } else {
//       console.error("Error:", error.message);
//       throw new Error("Network error: Could not reach server line 53");
//     }
//   }
// };

// API response'ı için tip tanımlaması (örneğin: { success: boolean, message: string })
export type SignupResponse = {
  success: boolean;
  message: string;
}

// signupRequest fonksiyonunun tipi
export const signupRequest = async (userCredentials: User): Promise<number> => {
  try {
    // Kullanıcı verilerini backend'e gönderen POST isteği
    const response = await axios.post(API_URL, {
      name: userCredentials.name,
      email: userCredentials.email,
      password: userCredentials.password,
      phoneNumber: userCredentials.phoneNumber,
    });

    // API'den dönen veriyi döndürüyoruz
    return response.status;

  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // If the server responded with an error (status code 4xx, 5xx)
        console.error("Error:", error.response.data);
        throw new Error(error.response.data.message || "Signup failed");
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
};