import LightContainer from "./LightContainer";
import ShippingContainer from "./shippingContainer";

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
