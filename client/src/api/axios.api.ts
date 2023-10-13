import axios from "axios";
import {
    getTokenFromLocalStorage
} from "../heplers/localstorage.helper.ts";

export const instance = axios.create({
    baseURL: 'http://localhost:3001/api',
    headers: {
        Authorization: 'Bearer ' + getTokenFromLocalStorage() || '',
    }
})