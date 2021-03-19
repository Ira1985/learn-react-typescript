import {API_2} from "../utils/AxiosAPI";
import Emploee from "../models/Emploee";

export const emploeeService = {
    getList
}

function getList() {
    return API_2.get<Emploee[]>('/task0/users')
        .then(res => {
            if(res && res.status === 200){
                if(res.data){
                    type i = typeof res.data[0]
                    return res.data;
                }else
                    return null;
            }
            return null;
        })
}
