import { Istudent } from "./std";




export interface IRes<T>{
    msg:string
    data:T
}


export interface IstdRes{
    msg:string;
    data:Istudent
}