"use client";

import {

useEffect,

useState

} from "react";

export default function useCountdown(

expires:string

){

const[remaining,setRemaining]=useState("");

const[expired,setExpired]=useState(false);

useEffect(()=>{

if(!expires)return;

const interval=setInterval(()=>{

const end=new Date(expires);

const now=new Date();

const diff=end.getTime()-now.getTime();

if(diff<=0){

setExpired(true);

setRemaining("Expired");

clearInterval(interval);

return;

}

const minutes=Math.floor(diff/60000);

const seconds=Math.floor(

(diff%60000)/1000

);

setRemaining(

`${minutes}:${seconds

.toString()

.padStart(2,"0")}`

);

},1000);

return()=>clearInterval(interval);

},[expires]);

return{

remaining,

expired

};

}