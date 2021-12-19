import HeavyContainer from "./HeavyContainer";
import LightContainer from "./LightContainer";
import { Ship } from "./ship";
import ShippingContainer from "./shippingContainer";
import { Transporter } from "./transporter";
import { Truck } from "./truckclass";

export function FindContainersByDestination(containers:ShippingContainer[],destination:string){
    let newArray:ShippingContainer[] = []
    containers.filter(container => {if(container.destination === destination){ //Had to change logic of the function.
        // .filter returns an array of met criteria, but still need to be pushed into an array and return the array.
        newArray.push(container)
        
    }});
    
    return newArray
   
};

// let newArray:ShippingContainer[] = []
//     let AContainer:ShippingContainer = new LightContainer("China", 2000) 
//     let BContainer:ShippingContainer = new LightContainer("Florida", 2000) 
//     let CContainer:ShippingContainer = new LightContainer("China", 2000)  //Testing to make sure function returns desired output. Returns correct!
//     newArray.push(AContainer,BContainer,CContainer)
//     console.log(newArray);  
//     console.log(FindContainersByDestination(newArray,"Florida"))

export function findOverWeightTransporters(transporters:Transporter[]):Transporter[]{
    let newArray:Transporter[] = []
    transporters.filter(transporter => {if(transporter.isOverWeight() == true){
        newArray.push(transporter)
    }});
    return newArray
}

// let newArray:Transporter[] = [] //Created empyt array for Transporter array
// let newTransport:Truck = new Truck(500) //Made new transports:Truck
// let heavyContainer:ShippingContainer = new HeavyContainer(250,"China", 251) //Made container
// newTransport.addContainer(heavyContainer)//Added container to transport 
// newArray.push(newTransport) //added the transporter:Truck to the array. The transporter is "loaded" with the containers
// console.log(findOverWeightTransporters(newArray));

export function isSafeToAddContainer(ship:Ship, container:ShippingContainer):boolean {
    if(ship.getTotalWeight() + container.getGrossWeight() <= ship.maxWeight){
        return true
    }
    return false
}


