import {API} from "../utils/AxiosAPI";

export const movieService = {
    getList,
    getSessionId
}

type ResponseMovieDbType<T> = {
    page: number,
    total_results: number,
    total_pages: number,
    results: T[]
}

type RequestToken = {
    success: boolean,
    expires_at: string,
    request_token: string
}

type SessionNew = {
    success: boolean,
    session_id: string
}

function getSessionId() {
    return API.get<RequestToken>("authentication/token/new")
        .then(res => API.post<RequestToken>("authentication/token/validate_with_login",
            {
                "username": "successon",
                "password": "con12sider",
                "request_token": res.data.request_token
            }))
        .then(res => API.post<SessionNew>("authentication/session/new",
            {
                "request_token": res.data.request_token
            }))
        .then(res => console.log(res))
}

function getList<T>(page: number = 1, sort_by: string = "popularity.desc") {
    return API.get<ResponseMovieDbType<T>>("discover/movie", {
        params: {
            page: page,
            sort_by: sort_by
        }
    })
        .then(res => {
            if(res && res.status === 200){
                if(res.data){
                    return res.data;
                }else
                    return null;
            }
            return null;
        })
}