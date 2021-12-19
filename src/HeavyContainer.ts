import ShippingContainer from "./shippingContainer";


 export class HeavyContainer implements ShippingContainer{
    tareWeight:number;
    destination:string;
    cargoWeight:number;

    constructor(tareWeight:number, destination:string, cargoWeight:number){
        this.tareWeight = tareWeight
        this.destination = destination
        this.cargoWeight = cargoWeight


    }

    getGrossWeight():number {
        return this.tareWeight + this.cargoWeight
    }

}
export default HeavyContainer