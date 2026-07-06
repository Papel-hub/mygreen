export type RequestStatus =
    | "NEW"
    | "ACCEPTED"
    | "EXPIRED"
    | "CANCELLED";

export interface Customer {

    id:string;
    name:string;
    phone:string;
    photo?:string;

}

export interface Product{

    id:string;
    name:string;
    image:string;
    message?:string;
    weight:number;
    quantity:number;

}

export interface Location{

    address:string;
    city:string;
    postcode:string;
    lat:number;
    lng:number;
    startTime:string;
    endTime:string;

}

export interface RequestModel{

    id:string;
    orderNumber:string;
    status:RequestStatus;
    expiresAt:string;
    customer:Customer;
    product:Product;
    pickup:Location;
    delivery:Location;
    distance:number;
    estimatedMinutes:number;
    suggestedPrice:number;
    driverOffer?:number;
    notes?:string;
    createdAt:string;
    minimumOffer?: number;
    maximumOffer?: number;
    currency?: string;

}