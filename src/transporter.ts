import ShippingContainer from "./shippingContainer";


export interface Transporter {
    maxWeight:number;
    addContainer:(container:ShippingContainer) => void;
    getTotalWeight: () => number;
    isOverWeight:() => boolean
}