import axios from "axios";
import {Md5} from "md5-typescript";

export const API = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    timeout: 100000,
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGExZTY0ZWNhYTM4ZmZmM2E4Y2RlYWI0NmM2MjQ1MSIsInN1YiI6IjYwMTkxMmVkYTA2NjQ1MDA0MDNiNTc0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U8rfb98YgAZqTeHbjL_Sd3lATujdoXyVGBrlDhd4GXE"
    }
})

API.defaults.headers.post['Content-Type'] = 'application/json';

API.defaults.headers.post['Content-Type'] = 'application/json';

API.defaults.params = {
    //"api_key": "00a1e64ecaa38fff3a8cdeab46c62451",
    "language": "ru-RU"
}

API.interceptors.response.use((resolve) => resolve, (error) => {
    switch(error.response.status) {
        case 401: {
            throw new Error("wrong login or password");
            break;
        }
    }
})

export const API_2 = axios.create({
    baseURL: "https://yalantis-react-school-api.yalantis.com/api",
    timeout: 100000
})

export const APICS = axios.create({
    baseURL: "http://localhost:8085/content/v1",
    timeout: 100000,
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM3LCJjcmVhdGVkIjoxNjE4MjI2MzcwOTU4LCJpc3MiOiJtcF9jb3JlIiwiZXhwIjoxNjc4NzA2MzcwLCJlbWFpbCI6InppbmtvLmMuc0BnbWFpbC5jb20ifQ.q5rI2m9R1DDYm33vt11uSOA6Ntg0mPJQQEXXgu1NJED-sQyMUaurjge459X_WPa5tTcT0iS2zd_ef81YIPXRig"
    }
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
