import Emploee from "../models/Emploee";
import {AxiosRequestConfig} from "axios";

interface ResponseEmployeeType {
   data: Array<Emploee>
   config: AxiosRequestConfig
    headers: any
    request: any | undefined
    statusText: string
    status: number
}

export default ResponseEmployeeType;