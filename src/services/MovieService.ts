import {API} from "../utils/AxiosAPI";

export const movieService = {
    getList
}

function getList(page: number = 0) {
    return API.get("discover/movie", {
        params: {
            language: "ru-RU",
            page: page
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
        .catch(error => {
            console.log(error);
            return error;
        });
}