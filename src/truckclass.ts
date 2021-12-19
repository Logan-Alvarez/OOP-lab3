import LightContainer from "./LightContainer";
import ShippingContainer from "./shippingContainer";
import {Transporter} from "./transporter";
import HeavyContainer from "./HeavyContainer";

export class Truck implements Transporter{
    maxWeight: number;
    container: ShippingContainer | null = null
    
    
    constructor(maxWeight:number) {
        this.maxWeight = maxWeight;
       
    }
    
    addContainer(container:ShippingContainer):void{
        this.container = container
        
    }

    getTotalWeight():number {
        if(this.container === null){
            return 0
        }
       
      return this.container.getGrossWeight()
        
    }

    isOverWeight():boolean{
        if(this.getTotalWeight() > this.maxWeight){
            return true
        }
        else{return false}
    };

}



