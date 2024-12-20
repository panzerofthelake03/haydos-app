export const API_URL = "http://192.168.1.159:8088";
export var TOKEN= "";

export const update_TOKEN = (new_TOKEN: string) => {
    TOKEN = new_TOKEN;
    console.log("TOKEN is updated new token:", TOKEN)
};


