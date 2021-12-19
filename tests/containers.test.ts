import HeavyContainer from "../src/HeavyContainer";
import LightContainer from "../src/LightContainer";
import ShippingContainer from "../src/shippingContainer";
import {Truck} from "../src/truckclass";
import { Ship } from "../src/ship";
import  {FindContainersByDestination, findOverWeightTransporters} from "../src/functions";
import {Transporter} from "../src/transporter"
describe("LightContainer class", () => {
    test("destination is set from the constructor", () => {
        let newDestination:LightContainer = new LightContainer("Africa", 0)
        expect(newDestination.destination).toBe("Africa")
    });
    test("Cargo weight is set from the constructor", () => {
        let newCargoWeight:LightContainer = new LightContainer("Africa", 20)
        expect(newCargoWeight.cargoWeight).toBe(20)
    });
    test("getGrossWeight returns the cargoWeight", () => {
        let newCargoWeight:LightContainer = new LightContainer("Africa", 50)
        expect(newCargoWeight.getGrossWeight()).toBe(50);
    });
    test("getGrossWeight returns the cargoWeight", () => {
        let newCargoWeight:LightContainer = new LightContainer("Africa", 1000)
        expect(newCargoWeight.getGrossWeight()).toBe(1000);
    });

});

describe("HeavyContainer class", () => {
    test("tareweight, destination and cargoWeight properties are set from constructor",() => {
         let newCargoWeight:HeavyContainer = new HeavyContainer(20,"Bora Bora", 50)
        expect(newCargoWeight).toBe(newCargoWeight)
    });
    test("tareweight, destination and cargoWeight properties are set from constructor",() => {
        let newCargo:HeavyContainer = new HeavyContainer(20,"Bora Bora",50)
       expect(newCargo.cargoWeight).toBe(50)
   });

   test("getGrossWeight return the tareWeight plus the cargoWeight",() => {
       let newCargo:HeavyContainer = new HeavyContainer(20,"Mexico", 50)
       expect(newCargo.getGrossWeight()).toBe(70)
   });
   test("getGrossWeight return the tareWeight plus the cargoWeight",() => {
    let newCargo:HeavyContainer = new HeavyContainer(101,"Mexico", 25)
    expect(newCargo.getGrossWeight()).toBe(126)
    });

})

describe("Truck class and Transporter interface", () => {
    test("Max weight property is set from the constructor",()=> {
        let newTransport:Truck = new Truck (500)
        expect(newTransport.maxWeight).toBe(500)
    });
    test("Container property is set to null in new Truck instance",()=> {
        let newTransport:Truck = new Truck (500)
        expect(newTransport.container).toBe(null)
    });

    test("Calling the addContainer sets the contianer property", ()=> {
        let newTransport:Truck = new Truck (500,)
        let newContainer:ShippingContainer = new LightContainer("Africa", 30) //ARRANGE what your testing and EXPECT the what the value is.
        newTransport.addContainer(newContainer) // Gave the newTransport truck a container. 
        expect(newTransport.container).toBe(newContainer) //Checking to make sure the newTransport.container is there...if not it would be null.
    });

    test("Calling the getTotalWeight when a LightContainer is added", ()=> {
        let newTransport:Truck = new Truck (500,)
        let newContainer:ShippingContainer = new LightContainer("Africa", 30) //ARRANGE what your testing and EXPECT the what the value is.
        newTransport.addContainer(newContainer) // Gave the newTransport truck a container.
        expect(newTransport.getTotalWeight()).toBe(30) //Now that the transport has a container. It checks the total weight of the container. *30 for this test.
    });
   
   test("Calling the getTotalWeight when a HeavyContainer is added", () => {
       let newTransport:Truck = new Truck(500)
       let newContainer:ShippingContainer = new HeavyContainer(100,"China", 50)
       newTransport.addContainer(newContainer)
       expect(newTransport.getTotalWeight()).toBe(150)
   });
   test("Calling the getTotalWeight when a HeavyContainer is added", () => {
        let newTransport:Truck = new Truck(500)
        let newContainer:ShippingContainer = new HeavyContainer(75,"China", 25)
        newTransport.addContainer(newContainer)
        expect(newTransport.getTotalWeight()).toBe(100)
    });

    test("Calling getTotalWeight returns 0 when container is null", () => { //Because we didn't add a container the deafault should be 0
        let newTransport:Truck = new Truck(500)
        expect(newTransport.getTotalWeight()).toBe(0)
    });

    test("isOverWeight returns true when the total weight is greater than max weight",() => {
        let newTransport:Truck = new Truck(500) //Make "Truck" object
        let newContainer:ShippingContainer = new HeavyContainer(250,"China", 251) //Make "shipping container" object
        newTransport.addContainer(newContainer) //Add the container to the "Truck" object.
        expect(newTransport.isOverWeight()).toBe(true) //Expect the weight to be over max weight and return true for being overweight.
    });

    test("isOverWeight returns false when the total weight is less than max weight",() => {
        let newTransport:Truck = new Truck(500) //Make "Truck" object
        let newContainer:ShippingContainer = new HeavyContainer(250,"China", 30) //Make "shipping container" object
        newTransport.addContainer(newContainer) //Add the container to the "Truck" object.
        expect(newTransport.isOverWeight()).toBe(false) //Expect the weight to be under max weight and return false for being overweight.
    });

    test("isOverWeight returns false when the total weight is equal to max weight",() => {
        let newTransport:Truck = new Truck(500) //Make "Truck" object
        let newContainer:ShippingContainer = new HeavyContainer(250,"China", 250) //Make "shipping container" object
        newTransport.addContainer(newContainer) //Add the container to the "Truck" object.
        expect(newTransport.isOverWeight()).toBe(false) //Expect the weight to be equal max weight and return false for being overweight.
    });

})

describe("Ship class with implemented transporter interface", () => {
    test("maxWeight property is set form the constructor parameter", () => {
        let newShip: Ship = new Ship(5000) //Made a new ship with maxWeight of 5000
        expect(newShip.maxWeight).toBe(5000) //Called newShip and looked at the maxWeight then expected it toBe 5000 - correct.
    });

    test("the containers property is set to an empty array in a new Ship instance", () => {
        let newShip:Ship = new Ship(5000) //Made a newShip and didn't make a container array. Array defaults to an empty array.
        expect(newShip.containers).toStrictEqual([ ]) // Needed to use "toStrictEqual" so computer knew it was an empty array.
    });

    test("Calling addContainer adds to the containers array property", () => {
        let newShip:Ship = new Ship(5000)
        let newContainer:ShippingContainer = new HeavyContainer(2000, "China", 2000)
        newShip.addContainer(newContainer) //added the container to the array of container for our newShip.
        expect(newShip.containers).toStrictEqual([newContainer]) //Needed to wrap newContainer in  "[ ] "  when using toStrictEqual.
    });

    test("Calling addcontainer twice adds both containers to the array of containers", () => {
        let newShip:Ship = new Ship(5000)
        let newContainer:ShippingContainer = new HeavyContainer(2000, "China", 2000)
        let smallContainer:ShippingContainer = new LightContainer("China", 2000)
        newShip.addContainer(newContainer)
        newShip.addContainer(smallContainer) //Added to containers to the array.
        expect(newShip.containers).toStrictEqual([newContainer,smallContainer]) //expected both container object to be in the array.
    });

    test("getTotalWeight returns the combined gross weight of the containers array", () => {
        let newShip:Ship = new Ship(5000)
        let newContainer:ShippingContainer = new HeavyContainer(2000, "China", 2000)
        let smallContainer:ShippingContainer = new LightContainer("China", 2000)
        newShip.addContainer(newContainer)
        newShip.addContainer(smallContainer)
        expect(newShip.getTotalWeight()).toBe(6000)
    });

    test("getTotalWeight returns 0 when the array containers is empty",() => {
        let newShip:Ship = new Ship(5000)
        expect(newShip.getTotalWeight()).toBe(0)
    });

    test("isOverWeight returns true when total weight is greater than maxWeight",() => {
        let newShip:Ship = new Ship(5000)
        let newContainer:ShippingContainer = new HeavyContainer(2000, "China", 2000)
        let smallContainer:ShippingContainer = new LightContainer("China", 2000)
        newShip.addContainer(newContainer)
        newShip.addContainer(smallContainer)
        expect(newShip.isOverWeight()).toBe(true)
    });

    test("isOverWeight returns false when total weight is less than maxWeight",() => {
        let newShip:Ship = new Ship(7000)
        let newContainer:ShippingContainer = new HeavyContainer(2000, "China", 2000)
        let smallContainer:ShippingContainer = new LightContainer("China", 2000)
        newShip.addContainer(newContainer)
        newShip.addContainer(smallContainer)
        expect(newShip.isOverWeight()).toBe(false)
    });

    test("isOverWeight returns false when total weight is equal to maxWeight",() => {
        let newShip:Ship = new Ship(6000)
        let newContainer:ShippingContainer = new HeavyContainer(2000, "China", 2000)
        let smallContainer:ShippingContainer = new LightContainer("China", 2000)
        newShip.addContainer(newContainer)
        newShip.addContainer(smallContainer)
        expect(newShip.isOverWeight()).toBe(false)
    });
})

describe("Test the findContainersByDestination function", () => {
    test("An array of light containers gets filtered",() => {
        let newArray:ShippingContainer[] = []
        let AContainer:ShippingContainer = new LightContainer("China", 2000)
        let BContainer:ShippingContainer = new LightContainer("Florida", 2000)
        let CContainer:ShippingContainer = new LightContainer("China", 2000) //Had to use toEqual 
        newArray.push(AContainer,BContainer,CContainer)
        expect(FindContainersByDestination(newArray,"China")).toEqual([{"cargoWeight": 2000, "destination": "China"}, {"cargoWeight": 2000, "destination": "China"}])
        
    });

    test("An array of HeavyContainer gets filtered by Florida destination",() => {
        let newArray:ShippingContainer[] = []
        let AContainer:ShippingContainer = new HeavyContainer(30,"China", 2000)
        let BContainer:ShippingContainer = new HeavyContainer(100,"Florida", 2000)
        let CContainer:ShippingContainer = new HeavyContainer(3000,"China", 2000) //Had to use toEqual 
        newArray.push(AContainer,BContainer,CContainer)
        expect(FindContainersByDestination(newArray,"Florida")).toEqual([{"cargoWeight": 2000, "destination": "Florida", "tareWeight": 100}])
    });
    
    test("An array of HeavyContainer gets filtered by Florida destination",() => {
        let newArray:ShippingContainer[] = []
        let AContainer:ShippingContainer = new HeavyContainer(30,"China", 2000)
        let BContainer:ShippingContainer = new HeavyContainer(100,"Florida", 2000)
        let CContainer:ShippingContainer = new LightContainer("China", 2000) //Had to use toEqual 
        newArray.push(AContainer,BContainer,CContainer)
        expect(FindContainersByDestination(newArray,"China")).toEqual([{"cargoWeight": 2000, "destination": "China", "tareWeight": 30}, {"cargoWeight": 2000, "destination": "China"}])
    });
    test("An array of HeavyContainer gets filtered by Florida destination",() => {
        let newArray:ShippingContainer[] = []
        let AContainer:ShippingContainer = new HeavyContainer(30,"China", 2000)
        let BContainer:ShippingContainer = new HeavyContainer(100,"Florida", 2000)
        let CContainer:ShippingContainer = new LightContainer("China", 2000) //Had to use toEqual 
        newArray.push(AContainer,BContainer,CContainer)
        expect(FindContainersByDestination(newArray,"Japan")).toEqual([])
    });

});

describe("findOverWeightTransporters function returns new array of transports that over overweight",() => {
    test("An array of trucks with some over weight create a new array", () => {
        let newArray:Transporter[] = [] //Created empyt array for Transporter array
        let newTransport1:Truck = new Truck(500) //Made new transports:Truck
        let newTransport2:Truck = new Truck(500)
        let heavyContainer:ShippingContainer = new HeavyContainer(250,"China", 251)
        let lightContainer:ShippingContainer = new LightContainer("China", 251) //Made container
        newTransport1.addContainer(heavyContainer)//Added container to transport 
        newTransport2.addContainer(lightContainer)
        newArray.push(newTransport1, newTransport2) //added the transporter:Truck to the array. The transporter is "loaded" with the containers
        expect(findOverWeightTransporters(newArray)).toEqual([{"container": {"cargoWeight": 251, "destination": "China", "tareWeight": 250}, "maxWeight": 500}])
    });

    test("An array of trucks and ships with some over weight that create a new array", () => {
        let newArray:Transporter[] = [] //Created empyt array for Transporter array
        let newTransport1:Truck = new Truck(500) //Made new transports:Truck
        let newTransport2:Ship = new Ship(1000)
        let heavyContainer:ShippingContainer = new HeavyContainer(500,"China", 501)
        let lightContainer:ShippingContainer = new LightContainer("China", 251) //Made container
        newTransport1.addContainer(lightContainer)//Added container to transport 
        newTransport2.addContainer(heavyContainer)
        newArray.push(newTransport1, newTransport2) //added the transporter:Truck to the array. The transporter is "loaded" with the containers
        expect(findOverWeightTransporters(newArray)).toEqual([{"containers": [{"cargoWeight": 501, "destination": "China", "tareWeight": 500}], "maxWeight": 1000}])
    });
    test("An array of trucks and ships with none that are over weight that create a new empty array", () => {
        let newArray:Transporter[] = [] //Created empyt array for Transporter array
        let newTransport1:Truck = new Truck(500) //Made new transports:Truck
        let newTransport2:Ship = new Ship(1000)
        let heavyContainer:ShippingContainer = new HeavyContainer(500,"China", 500)
        let lightContainer:ShippingContainer = new LightContainer("China", 251) //Made container
        newTransport1.addContainer(lightContainer)//Added container to transport 
        newTransport2.addContainer(heavyContainer)
        newArray.push(newTransport1, newTransport2) //added the transporter:Truck to the array. The transporter is "loaded" with the containers
        expect(findOverWeightTransporters(newArray)).toEqual([])
    });
})


