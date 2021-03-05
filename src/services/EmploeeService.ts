import {API_2} from "../utils/AxiosAPI";
import Emploee from "../models/Emploee";

export const emploeeService = {
    getList,
    isEmploee
}

function getList() {
    return API_2.get('/task0/users')
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


function isEmploee(obj: any): obj is Emploee {
    return !!obj &&
        typeof obj === "object" &&
        "id" in obj && "firstName" in obj && "lastName" in obj && "dob" in obj
}