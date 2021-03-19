import axios, {AxiosResponse} from "axios";
import {Md5} from "md5-typescript";

export const API = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    timeout: 100000,
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGExZTY0ZWNhYTM4ZmZmM2E4Y2RlYWI0NmM2MjQ1MSIsInN1YiI6IjYwMTkxMmVkYTA2NjQ1MDA0MDNiNTc0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U8rfb98YgAZqTeHbjL_Sd3lATujdoXyVGBrlDhd4GXE"
    }
})

API.defaults.params = {
    //"api_key": "00a1e64ecaa38fff3a8cdeab46c62451",
    "language": "ru-RU"
}

export const API_2 = axios.create({
    baseURL: "https://yalantis-react-school-api.yalantis.com/api",
    timeout: 100000
})

export const API_Marvel = axios.create({
    baseURL: "https://gateway.marvel.com:443/v1/public",
    timeout: 100000,
})

let hash = Md5.init(1 + "a11884f433a303b6fc3c1a02f75d51f3dc5d4108" + "aea1a487d6f3e2b12ed4b791d651f36b")

API_Marvel.defaults.params = {
    "ts": 1,
    "apikey": "aea1a487d6f3e2b12ed4b791d651f36b",
    "hash": hash
}
