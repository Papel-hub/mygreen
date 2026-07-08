import {

doc,

updateDoc

} from "firebase/firestore";

import { db } from "@/lib/firebase/config";

export async function sendOffer(

requestId:string,

price:number

){

const ref=doc(

db,

"requests",

requestId

);

await updateDoc(ref,{

driverOffer:price,

status:"PENDING"

});

}