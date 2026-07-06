"use client";

import {

useEffect

} from "react";

import {

doc,

onSnapshot

} from "firebase/firestore";

import { db } from "@/lib/firebase";

export default function useRealtimeRequest(

id:string,

callback:(data:any)=>void

){

useEffect(()=>{

if(!id)return;

const unsubscribe=onSnapshot(

doc(db,"requests",id),

(snapshot)=>{

callback({

id:snapshot.id,

...snapshot.data()

});

}

);

return()=>unsubscribe();

},[id]);

}