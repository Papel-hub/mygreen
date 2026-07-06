import {

doc,

getDoc

} from "firebase/firestore";

import { db } from "@/lib/firebase";

import { RequestModel } from "@/types/request";

export async function getRequest(

id:string

){

const ref=doc(

db,

"requests",

id

);

const snapshot=await getDoc(ref);

if(!snapshot.exists()){

throw new Error("Request not found");

}

return{

id:snapshot.id,

...snapshot.data()

} as RequestModel;

}