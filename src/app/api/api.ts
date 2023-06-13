import axios from "axios"

export const instance = axios.create({
  baseURL: "https://api.coincap.io/v2/",
  headers: {
    "Authorization": `Bearer d61c88ba-54be-4245-9c1f-ef302ccd73c9`
  }
})