"use client";

import {

useEffect,

useState

} from "react";

import { getRequest } from "@/services/requestService";

import { RequestModel } from "@/types/request";

export default function useRequest(

id:string

){

const[loading,setLoading]=useState(true);

const[request,setRequest]=useState<RequestModel>();

const[error,setError]=useState("");

useEffect(()=>{

if(!id)return;

load();

},[id]);

async function load(){

try{

setLoading(true);

const data=await getRequest(id);

setRequest(data);

}catch(err:any){

setError(err.message);

}

setLoading(false);

}

return{

loading,

request,

error,

reload:load

};

}