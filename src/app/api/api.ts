import axios from "axios"
import { AUTHORIZATION_TOKEN, BASE_URL } from "./constants"

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${AUTHORIZATION_TOKEN}`
  }
})
