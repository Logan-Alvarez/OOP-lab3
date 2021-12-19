import ShippingContainer from "./shippingContainer";
import { Transporter } from "./transporter";

export class Ship implements Transporter {
    isSafeToAddContainer(): any {
        throw new Error("Method not implemented.");
    }
    maxWeight: number;
    containers:ShippingContainer[] = [ ];


    constructor(maxWeight:number){
        this.maxWeight = maxWeight;
    };

    addContainer(container: ShippingContainer):void {
        this.containers.push(container)
    };

    getTotalWeight():number {
        if(this.containers == [ ]){
            return 0;
        }
        let sum:number = 0
        this.containers.forEach(container => sum += container.getGrossWeight());
        return sum;
    };

    isOverWeight():boolean {
        if(this.getTotalWeight() > this.maxWeight){
            return true
        }
        return false
    };
}