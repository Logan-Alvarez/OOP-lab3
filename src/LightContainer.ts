import ShippingContainer from "./shippingContainer";


export class LightContainer implements ShippingContainer{
    destination: string;
    cargoWeight:number = 0;

    constructor(destination:string, cargoWeight:number){
        this.destination = destination;
        this.cargoWeight = cargoWeight;
    }

    getGrossWeight():number{ //Getter 
        return this.cargoWeight
    }
}


// let newCargoWeight:LightContainer = new LightContainer("Africa", 20)

// newCargoWeight.getGrossWeight();
export default LightContainer