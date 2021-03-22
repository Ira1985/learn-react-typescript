import {API} from "../utils/AxiosAPI";

export const movieService = {
    getList
}

type ResponseMovieDbType<T> = {
    page: number,
    total_results: number,
    total_pages: number,
    results: T[]
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