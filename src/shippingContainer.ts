export interface ShippingContainer {
    destination:string;
    cargoWeight:number;
    getGrossWeight: () => number
}
export default ShippingContainer