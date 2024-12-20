import axios from "axios";
import { API_URL,TOKEN,update_TOKEN } from "./serviceConstants";

export interface feedinglocation{
  latitude: number,
  longitude: number,
  title: string,
  description: string,
  isUser: false,
}
export interface getfeedinglocationResponse{
  status: number,
  data: feedinglocation[],
}

export const listFeedingLocations = async () => {
    console.log("token: "+TOKEN)
    return {
        data: [
        {
            latitude: 38.31639423357439,
            longitude: 26.639562811186007,
            title: "Üniyurt - Makine",
            description: 'Description',
            isUser: false,
          },
          {
            latitude: 38.324029975199984,
            longitude: 26.633353878540802,
            title: "Moleküler Biyoloji ve Genetik",
            description: 'Description',
            isUser: false,
          },
          {
            latitude: 38.31543821187884,
            longitude: 26.637177530529513,
            title: "Teknopark A1 Bölgesi",
            description: 'Description',
            isUser: false,
          },
          {
            latitude: 38.32470909159647,
            longitude: 26.63053504401075,
            title: "Mimarlık",
            description: 'Description',
            isUser: false,
          },
          {
            latitude: 38.32491048966996,
            longitude: 26.63525735652814,
            title: "KYK Yurtları",
            description: 'Description',
            isUser: false,
          },
          {
            latitude: 38.31852006630872,
            longitude: 26.642654412704726,
            title: "Şoförler Odası - SKS",
            description: 'Description',
            isUser: false,
          },
          {
            latitude: 38.318813166636,
            longitude: 26.643318354116023,
            title: "Rektörlük",
            description: 'Description',
            isUser: false,
          },
        ]
    }
}
export const getfeedinglocations = async (): Promise<getfeedinglocationResponse>=> {
  try {
      console.log("requesting feedinglocations token :" + TOKEN)
      const response = await axios.get(API_URL + "/api/v1/location-controller/getAllLocationsApp",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      const locationList = response.data || [];

      // this won't be needed when the dtos are done ins the backendside
      console.log("location mapping in feedingService")
      const updatedLocationList = locationList.map((location: any) => ({
        latitude: location.latitude,
        longitude: location.longitude,
        title: location.name,
        description: location.description,
        isUser: false,
      }));
      
      console.log("this is the location list",updatedLocationList)
      const getfeedinglocationsResponse: getfeedinglocationResponse = {
        status: response.status,
        data: updatedLocationList,
      }

      return getfeedinglocationsResponse;
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
