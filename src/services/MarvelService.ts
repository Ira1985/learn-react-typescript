import {API_Marvel} from "../utils/AxiosAPI";

export const marvelService = {
    getCharactersList
}

type ResponseCharactersMarvelType<T> = {
    code: number,
    status: string,
    attributionHTML: string,
    attributionText: string,
    copyright: string,
    etag: string,
    data: {
        count: number,
        limit: number,
        offset: number,
        total: number,
        results: Array<T>
    }
}

function getCharactersList<T>() {
    return API_Marvel.get<ResponseCharactersMarvelType<T>>('/characters')
        .then(res => {
            console.log(res)
            if(res && res.status === 200){
                if(res.data){
                    return res.data;
                }else
                    return null;
            }
            return null;
        })
}